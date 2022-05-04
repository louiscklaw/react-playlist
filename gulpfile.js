const gulp = require('gulp');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

const {
  promises: { readdir },
} = require('fs');

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

gulp.task('yarn_all', async (done) => {
  getDirectories('.').then((dirs) => {
    // let dirs = ["with-styled-jsx-scss-app"];
    for (let el of dirs) {
      if (el !== 'node_modules' && el !== '.git' && el !== '.vscode') {
        if (fs.existsSync(`${el}/package.json`)) {
          console.log(`working on ${el}`);
          console.log({ el });
          try {
            child_process.execSync(`cd ${el} && yarn --dev`, {
              encoding: 'utf-8',
            });
          } catch (error) {
            console.log(error);
            fs.renameSync(`${el}/package.json`, `${el}/package.json.error`);
          }
        }
      }
    }
    console.log({ dirs });
  });
});

gulp.task('clear_node_modules', async (done) => {
  getDirectories('.').then((dirs) => {
    // let dirs = ["with-styled-jsx-scss-app"];
    for (let el of dirs) {
      if (el !== 'node_modules' && el !== '.git' && el !== '.vscode') {
        if (fs.existsSync(`${el}/package.json`)) {
          console.log(`working on ${el}`);
          console.log({ el });
          try {
            child_process.execSync(`cd ${el} && rm -rf node_modules`, {
              encoding: 'utf-8',
            });
          } catch (error) {
            console.log(error);
            fs.renameSync(`${el}/package.json`, `${el}/package.json.error`);
          }
        }
      }
    }
    console.log({ dirs });
  });
});

gulp.task('add_package_scripts', async (done) => {
  getDirectories('.').then((dirs) => {
    // let dirs = ['react-form-tryout'];
    for (let el of dirs) {
      if (el !== 'node_modules' && el !== '.git' && el !== '.vscode') {
        let package_json_file = `${el}/package.json`;
        if (fs.existsSync(package_json_file)) {
          try {
            let package_json_content = fs.readFileSync(package_json_file);
            let package_json = JSON.parse(package_json_content);
            fs.writeFileSync(
              package_json_file,
              JSON.stringify(
                {
                  ...package_json,
                  scripts: {
                    ...package_json.scripts,
                    eject: 'react-scripts eject',
                    prettier_file: 'prettier --write "./src/**/*.{js,jsx}"',
                    'clear-all': 'rm -rf build node_modules',
                    're-build':
                      'rm -rf build node_modules && yarn install && yarn build',
                    gitUpdate: 'yarn prettier_file && scripts/gitUpdate.sh',
                    dev: 'yarn --dev && set HTTPS=true&&yarn start',
                    http: 'serve -s build',
                  },
                },
                null,
                2
              )
            );
          } catch (error) {
            console.log(package_json_file);
            console.error(error);
          }
        }
      }
    }
    console.log('done');
  });
});

gulp.task('sync_prettier_json', async (done) => {
  getDirectories('.').then((dirs) => {
    // let dirs = ['react-form-tryout'];
    for (let el of dirs) {
      if (el !== 'node_modules' && el !== '.git' && el !== '.vscode') {
        let prettierrc_json_file = `${el}/.prettierrc.json`;
        let package_json_file = `${el}/package.json`;
        // if (fs.existsSync(package_json_file)) {
        if (true) {
          try {
            // let package_json_content = fs.readFileSync(prettierrc_json_file);
            // let prettierrc_json = JSON.parse(package_json_content);
            fs.writeFileSync(
              prettierrc_json_file,
              JSON.stringify(
                {
                  // ...prettierrc_json,
                  arrowParens: 'avoid',
                  bracketSpacing: true,
                  htmlWhitespaceSensitivity: 'css',
                  insertPragma: false,
                  jsxBracketSameLine: false,
                  jsxSingleQuote: false,
                  printWidth: 100,
                  proseWrap: 'preserve',
                  quoteProps: 'as-needed',
                  requirePragma: false,
                  semi: false,
                  singleQuote: true,
                  tabWidth: 2,
                  trailingComma: 'all',
                  useTabs: false,
                },
                null,
                2
              )
            );
          } catch (error) {
            console.log(prettierrc_json_file);
            console.error(error);
          }
        }
      }
    }
    console.log('done');
  });
});

gulp.task(
  'default',
  gulp.series('yarn_all', (done) => {
    done();
  })
);

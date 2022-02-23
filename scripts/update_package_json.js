const fs = require('fs');
const path = require('path');
const CWD = path.resolve(__dirname);

console.log('helloworld');

fs.readdirSync('.').forEach((dirs) => {
  // console.log(dirs);
  if (dirs.indexOf('react') > -1) {
    fs.readdirSync(`./${dirs}`).forEach((file) => {
      if (file.indexOf('package.json') > -1) {
        console.log(`./${dirs}/${file}`);
        JSON_RAW = JSON.parse(fs.readFileSync(`./${dirs}/${file}`, 'utf8'));
        // console.log(JSON_RAW);
        json_out = JSON_RAW;
        json_out.name = dirs;
        console.log(json_out);
        fs.writeFileSync(
          `./${dirs}/${file}`,
          JSON.stringify(json_out, null, 2) + '\n'
        );
      }
    });
  }
});

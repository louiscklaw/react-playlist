const gulp = require('gulp')

const { series, parallel } = require('gulp')
var run = require('gulp-run-command').default

const CLEAN_CMD = 'rm -rf jobsdb_qa.png'
const BUILD_TAILWINDCSS_CMD = 'npx tailwindcss -i ./src/input.css -o ./public/tailwind_build.css'
const WATCH_DIR = '.'

gulp.task('clean', run(CLEAN_CMD))

gulp.task('build_tailwindcss', gulp.series(run(BUILD_TAILWINDCSS_CMD, { ignoreErrors: true })))

gulp.task('watch', () => {
  gulp.watch(['./*.js', '!js/*.min.js'], gulp.parallel('build_tailwindcss'))
})

gulp.task('default', gulp.series('watch'))

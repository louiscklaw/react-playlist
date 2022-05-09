const gulp = require("gulp");

const { series, parallel } = require("gulp");
var run = require("gulp-run-command").default;

const CLEAN_CMD = "rm -rf jobsdb_qa.png";
const DEV_CMD = "yarn start";
const WATCH_DIR = ".";

gulp.task("clean", run(CLEAN_CMD));

gulp.task("dev", gulp.series("clean", run(DEV_CMD, { ignoreErrors: true })));

gulp.task("watch", () => {
  gulp.watch(["./*.js", "!js/*.min.js"], gulp.series("build"));
});

gulp.task("default", gulp.series("dev"));

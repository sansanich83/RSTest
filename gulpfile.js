"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

gulp.task("css", function () {
  return gulp.src("../rstest/assets/css/*.css")
    .pipe(plumber())
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "../RSTest",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("../rstest/assets/css/*.css", gulp.series("css"));
  gulp.watch("../rstest/*.html").on("change", server.reload);
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("start", gulp.series("server"));

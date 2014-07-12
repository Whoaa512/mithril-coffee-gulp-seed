var gulp = require('gulp');
var bowerFiles = require('gulp-bower-files');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var size = require('gulp-size');

gulp.task('fonts', function() {
  return bowerFiles()
    .pipe(filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe(size());
});

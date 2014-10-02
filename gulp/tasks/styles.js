var path = require('path');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var size = require('gulp-size');

gulp.task('styles', function () {
  return gulp.src('app/styles/main.less')
    // .pipe(sourcemaps.init())
    .pipe(less({
      paths: ['app/styles/includes', 'app/bower_components/bootstrap/less']
    }))
    // .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(size());
});

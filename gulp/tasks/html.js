var gulp = require('gulp');
var gutil = require('gulp-util');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var size = require('gulp-size');

gulp.task('html', ['styles', 'browserify'], function() {
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');
  var assets = useref.assets({ searchPath: '{.tmp,app}' })

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe(size())
});

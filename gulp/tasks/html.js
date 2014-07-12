var gulp = require('gulp');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var size = require('gulp-size');

gulp.task('html', ['styles', 'browserify'], function() {
  var jsFilter = filter('**/*.js');
  var cssFilter = filter('**/*.css');

  return gulp.src('app/*.html')
    .pipe(useref.assets({ searchPath: '{.tmp,app}' }))
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(csso())
    .pipe(cssFilter.restore())
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'))
    .pipe(size());
});

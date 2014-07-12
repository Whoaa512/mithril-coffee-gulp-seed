var gulp = require('gulp');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var size = require('gulp-size');

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe(size());
});

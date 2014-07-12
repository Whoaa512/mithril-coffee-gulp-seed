var gulp = require('gulp');

gulp.task('extras', function() {
  return gulp.src(['app/*.*', '!app/*.html'], {
    dot: true
  })
    .pipe(gulp.dest('dist'));
});

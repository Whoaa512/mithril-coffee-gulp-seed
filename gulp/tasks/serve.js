var gulp = require('gulp');

gulp.task('serve', ['connect', 'styles', 'browserify'], function() {
  require('opn')('http://localhost:9000');
});

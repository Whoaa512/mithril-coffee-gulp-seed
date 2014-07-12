var gulp = require('gulp');
var livereload = require('gulp-livereload');

// Determine watchify/browserify
gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch','connect', 'serve'], function() {
  var server = livereload();

  // watch for changes

  gulp.watch([
    'app/*.html',
    '.tmp/styles/**/*.css',
    '{.tmp,app}/scripts/**/*.js',
    'app/images/**/*'
  ])
  .on('change', function(file) {
    server.changed(file.path);
  });

  gulp.watch('app/styles/**/*.less', ['styles']);
  gulp.watch('app/scripts/**/*.coffee', ['browserify']);
  gulp.watch('app/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});

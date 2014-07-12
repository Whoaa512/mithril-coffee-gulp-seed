var gulp = require('gulp');

gulp.task('connect', function() {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({
      port: 35729
    }))
    .use(connect.static('app'))
    .use(connect.static('.tmp'))
    .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function() {
      console.log('Started connect web server on http://localhost:9000');
    });
});

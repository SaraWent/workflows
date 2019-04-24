var gulp = require('gulp'),
    gutil = require('gulp-util');

/* New js function format, add done() to fix error:
[12:46:06] The following tasks did not complete: log
[12:46:06] Did you forget to signal async completion?
*/
gulp.task('log', done => {
  gutil.log('Workflows are awesome');
  done();
});
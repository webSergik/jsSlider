var gulp = require('gulp'),
  jade = require('gulp-jade'),
  plumber = require('gulp-plumber'),
  browserSync = require('browser-sync');

gulp.task('jade', function() {
  return gulp.src('app/pages/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true}));
});

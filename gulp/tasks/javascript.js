var gulp = require('gulp'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync');

gulp.task('javascript', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream: true}));
});

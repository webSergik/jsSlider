import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('images', ['clean'], () => {
  return gulp.src('app/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/img'));
});

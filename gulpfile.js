var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function () {
  gulp.watch('**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass', 'watch'));

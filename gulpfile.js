const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  browserSync = require('browser-sync').create();

function style () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({overrideBrowserslist: ['last 25 versions']}))
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
};

function watch () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watch;
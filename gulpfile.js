'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//style paths
const sassFiles = 'template/scss/**/*.scss';
const cssDest = 'template/css/';

function buildStyles() {
  return gulp
    .src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
}

function style() {
  return gulp
    .src('./template/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./template/css/'))
    .pipe(browserSync.stream());
}
gulp.watch('./template/scss/**/*.scss', style);
gulp.watch('*.html').on('change', browserSync.reload);

exports.buildStyles = buildStyles;

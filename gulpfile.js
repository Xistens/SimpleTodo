const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const webpack = require('webpack');
const config = require('./webpack.config.js');

gulp.task('default', ['build-client', 'build-server']);

gulp.task('build-client', ['copy-assets'], () => {
  // Compile client
  // webpack(config, (err) => {
  //   if (err) throw new gutil.PluginError('webpack', err);
  // });
});

gulp.task('build-server', ['copy-views'], () => {
  // Compile server
  gulp.src([
    '!src/assets/**/*.*',
    '!src/views/**/*.*',
    'src/**/*.js',
    'config/**/*.*',
  ])
    .pipe(babel({
      presets: ['env'],
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-assets', () => {
  // Copy statics over
  gulp.src([
    '!src/app/assets/js/*.*',
    'src/app/assets/css/*.*',
  ])
    .pipe(gulp.dest('dist/app/assets/css'));
});

gulp.task('copy-views', () => {
  gulp.src([
    'src/app/views/**/*.*',
  ])
    .pipe(gulp.dest('dist/app/views'));
});
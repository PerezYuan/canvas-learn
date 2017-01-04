const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('gulp-webpack');


gulp.task('jsmin', function() {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(babel())
        // .pipe(uglify())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsmin'], function() {
  return gulp.src('dist/main.js')
    .pipe(webpack({
        output: {
        filename: '[name].[hash].js',
      }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.watch('src/**/*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
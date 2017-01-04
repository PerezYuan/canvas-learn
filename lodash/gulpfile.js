const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('gulp-webpack'),
    del = require('del');


gulp.task('jsmin', function() {
    return gulp.src('src/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'))
});

gulp.task('clean', function () {
    return del(['./dist/**/*']);
});

gulp.task('default', ['clean'], function() {
    gulp.run('jsmin');
});

gulp.watch('src/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.run('default');
});
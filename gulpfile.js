const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      browsersync = require('browser-sync'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps');

// Transpilar e minificar SCSS
gulp.task('pack-css', function() {
    return gulp
    .src('./resources/css/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./resources/css/'));
});

// Sincronizar navegador e assistir alterações
gulp.task('browser-sync', function() {
    browsersync.init({
        server: {
            baseDir: './',
            index: './index.html'
        },
        port: 3000
    });
    gulp.watch(('./resources/css/scss/**/*.scss'), ['pack-css']).on('change', browsersync.reload);
    gulp.watch('*.html').on('change', browsersync.reload);
});

// gulp.task('default', ['browser-sync'], function() {
//     console.info('>>> Gulp funfando de boas...');
// });

gulp.task('default', function() {
    console.info('>>> Gulp funfando de boas...');
});

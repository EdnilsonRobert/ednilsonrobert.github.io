/** ============================================================================
     Project: EdnilsonRobert.Github.io
    ----------------------------------------------------------------------------
    @description: Páguina pessoal no Github Pages
    @author: EdnilsonRobert <frontend@ednilsonrobert.dev>
============================================================================= */

/** VARIABLES =============================================================== */
const browsersync = require('browser-sync'),
      gulp = require('gulp'),
      notify = require('gulp-notify'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps');

let messages = require('./gulpconfig.js').messages;
let paths = require('./gulpconfig.js').paths;


/** NOTIFY ================================================================== */
let htmlUpdated = () => {
  return notify(messages.html.success);
};
let cssFailed = () => {
  return notify(messages.css.error).write(messages.css.cssErrorMessage);
};
let cssUpdated = () => {
  return notify(messages.css.success);
};
let jsFailed = () => {
  return notify(messages.js.error).write(messages.js.jsErrorMessage);
};
let jsUpdated = () => {
  return notify(messages.js.success);
};


/** CSS ===================================================================== */
let outputStyles = {
  NESTED: 'nested',
  EXPANDED: 'expanded',
  COMPACT: 'compact',
  COMPRESSED: 'compressed'
}

let sassify = () => {
  return gulp
    .src(`${paths.css.src}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: outputStyles.COMPRESSED })
      .on('error', sass.logError)
      .on('error', (err) => {
        console.log(`Console de erros [Notifier]: ${err}`);
        cssFailed();
      }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(cssUpdated())
    .pipe(browsersync.reload({ stream: true }));
};
exports.sassify = sassify;


/** BROWSER SYNC ============================================================ */
let pageReload = () => {
  return gulp
    .src(paths.root.src)
    .pipe(browsersync.reload({ stream: true }));
};
exports.pageReload = pageReload;

let dev = () => {
  browsersync.init({
    server: {
      baseDir: paths.root.src,
      index: 'index.html'
    },
    port: 3000
  });
  gulp.src(paths.root.src).pipe(notify(messages.gulp.isRunning));
  gulp.watch(`./*.html`, gulp.series(pageReload));
  gulp.watch(`${paths.css.src}/**/*.scss`, gulp.series(sassify));
};
exports.dev = dev;


/** TASK DEFAULT ============================================================ */
gulp.task('default', gulp.series(dev), () => {
  console.log('>>> GulpJS works like a charm.');
});

// Node/Gulp Utilities
const gulp = require('gulp');
const log = require('fancy-log');
const c = require('chalk');
const plumber = require('gulp-plumber');
const spawn = require('child_process').spawn;
const gulpif = require('gulp-if');
const svgSprite = require('gulp-svg-sprite');


// Development Tools
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = browserSync.notify;
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const prefix = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const sassLint = require('gulp-sass-lint');

var path = require('path');

//——————————————————————————————————————————————————————————————————————————————
// Load local environment config
//——————————————————————————————————————————————————————————————————————————————
let localConfig;
try {
  localConfig = require('./localConfig.json');
}
catch (err) {
  if (process.env.NODE_ENV !== 'production') {
    log(c.bgRed.white('localConfig.json is missing'));
    log(c.red('Copy localConfig.example.json to localConfig.json and configure for your Drupal environment.'));
  }
}


//——————————————————————————————————————————————————————————————————————————————
// Debug info
//——————————————————————————————————————————————————————————————————————————————
if (process.env.NODE_ENV === 'production') {
  log(c.bgYellow.black('Production'), c.yellow('environment detected'));
} else {
  log(c.bgYellow.black('Local'), c.yellow('environment detected'));
}


//——————————————————————————————————————————————————————————————————————————————
// BrowserSync
//——————————————————————————————————————————————————————————————————————————————
function bsTask() {
  browserSync({
    proxy: localConfig.drupalUrl,
    open: false,
    port: '3000',
  });
};
exports.bs = bsTask;


//——————————————————————————————————————————————————————————————————————————————
// Sass
//——————————————————————————————————————————————————————————————————————————————
function sassCompileTask() {
  browserSync.notify(`Compiling Sass...`);

  return gulp.src(['sass/styles.scss'])
    .pipe(plumber())
    .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.init()))
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(postcss([
      prefix({
        browsers: ['>1%', 'iOS 9'],
        cascade: false,
      }),
      cssnano(),
    ]))
    .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.write('./')))
    .pipe(gulp.dest('css/'))
    .pipe(reload({stream: true}));
};


//——————————————————————————————————————————————————————————————————————————————
// Sass Linting
//——————————————————————————————————————————————————————————————————————————————
function sassLintTask() {
  return gulp.src('sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};


//——————————————————————————————————————————————————————————————————————————————
// Sass
//——————————————————————————————————————————————————————————————————————————————
const sassTask = gulp.series(sassLintTask, sassCompileTask);
exports.sass = sassTask;


//——————————————————————————————————————————————————————————————————————————————
// SVG Sprite generation
//——————————————————————————————————————————————————————————————————————————————

// SVG Config
const SVGconfig = {
  shape: {
    id: {
      generator: function(name, file) {
        return "cd-icon--" + path.basename(name.replace(/\s+/g, this.whitespace), '.svg');
      }
    }
  },
  mode: {
    css: false,
    view: false,
    defs: false,
    stack: false,
    symbol: { // symbol mode to build the SVG
      dest: 'img/icons', // destination folder
      sprite: 'cd-icons-sprite.svg', //sprite name
      example: true, // Build sample page
      prefix: '%s'
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false, // don't include the !DOCTYPE declaration
    rootAttributes: { "class": "cd-icons-sprite" }
  }
};

function buildSvgSprite() {
  return gulp.src('img/icons/*.svg')
    .pipe(svgSprite(SVGconfig))
    .pipe(gulp.dest('.'));
};
exports.sprites = buildSvgSprite;


//——————————————————————————————————————————————————————————————————————————————
// JS Linting
//——————————————————————————————————————————————————————————————————————————————
function jsLintTask() {
  return gulp.src(['js/cd-*.js', '!js/cd-polyfill.js'])
    .pipe(eslint())
    .pipe(eslint.format());
};


//——————————————————————————————————————————————————————————————————————————————
// JS Bundling
//——————————————————————————————————————————————————————————————————————————————
function jsBundleTask() {
  return gulp.src([
      'js/*.js',
    ])
    .pipe(concat('ocha_bundle.js'))
    .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
    .pipe(gulp.dest('js'))
    .pipe(reload({stream: true}));
};


//——————————————————————————————————————————————————————————————————————————————
// JS Lint + Bundle
//——————————————————————————————————————————————————————————————————————————————
const jsTask = gulp.series(jsLintTask/*, jsBundleTask*/);
exports.js = jsTask;


//——————————————————————————————————————————————————————————————————————————————
// Watch Files For Changes
//——————————————————————————————————————————————————————————————————————————————
function watchTask() {
  gulp.watch(['js/cd-*.js'], jsTask);
  gulp.watch(['sass/**/*.scss'], sassTask);
};
exports.watch = watchTask;


//——————————————————————————————————————————————————————————————————————————————
// Build assets and start Browser-Sync
//——————————————————————————————————————————————————————————————————————————————
const defaultTask = gulp.parallel(gulp.series(sassTask, /*jsTask,*/ bsTask), watchTask);
exports.dev = defaultTask;
exports.default = defaultTask;


//——————————————————————————————————————————————————————————————————————————————
// Build all assets in the theme
//——————————————————————————————————————————————————————————————————————————————
const buildTask = gulp.parallel(sassTask, jsTask);
exports.build = buildTask;

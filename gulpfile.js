const gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  hb = require('gulp-handlebars-all'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  purgecss = require('gulp-purgecss'),
  browsersync = require('browser-sync').create()

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './build/'
    },
    port: 3000
  })
  done()
}

function images() {
  return gulp
    .src('./source/assets/img/**/*')
    .pipe(newer('./build/assets/img'))
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: false,
            collapseGroups: true
          }]
        })
      ])
    )
    .pipe(gulp.dest('./build/assets/img'))
}

function imagesMove() {
  return gulp
    .src('./source/assets/img/**/*')
    .pipe(newer('./build/assets/img'))
    .pipe(gulp.dest('./build/assets/img'))
    .pipe(browsersync.stream())
}

function css() {
  return gulp
    .src('./source/assets/css/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(purgecss({
      content: ['./source/**/*.hbs'],
      whitelistPatterns: [/tns/]
    }))
    .pipe(prefix())
    .pipe(gulp.dest('./build/assets/css/'))
    .pipe(browsersync.stream())
}

function scripts() {
  return gulp
    .src('./source/assets/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/assets/js/'))
    .pipe(browsersync.stream());
}

function handlebars() {
  delete require.cache[require.resolve('./source/assets/data/data.json')]
  return gulp
    .src('./source/index.hbs')
    .pipe(hb('html', {
      context: require('./source/assets/data/data.json')
    }))
    .pipe(rename(path => path.extname = '.html'))
    .pipe(gulp.dest('./build'))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch('./source/assets/fonts/**/*', fonts)
  gulp.watch('./source/assets/css/**/*', css)
  gulp.watch('./source/assets/js/**/*', scripts)
  gulp.watch(['./source/index.hbs', './source/assets/data/data.json'], handlebars)
  gulp.watch('./source/assets/img/**/*', images)
}

function fonts() {
  return gulp
    .src('./source/assets/fonts/**/*')
    .pipe(gulp.dest('./build/assets/fonts'))
}

const build = gulp.parallel(css, scripts, images, fonts, handlebars, () => {
  return gulp
    .src('./source/**/*.html')
    .pipe(gulp.dest('./build'))
}),
  watch = gulp.series(gulp.parallel(css, scripts, imagesMove, fonts, handlebars), gulp.parallel(watchFiles, browserSync))

exports.build = build
exports.watch = watch

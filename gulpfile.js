const gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  hb = require('gulp-handlebars-all'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  rename = require('gulp-rename'),
  markdown = require('gulp-markdown'),
  inject = require('gulp-inject-string'),
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

function md() {
  return gulp.src('./source/md/**/*.md')
    .pipe(markdown())
    .pipe(inject.prepend(`
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SymbiFlow - the GCC of FPGAs</title>
        <link rel="stylesheet" href="assets/css/main.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css">
      </head>
      
      <body class="article">
    `))
    .pipe(inject.append(`
      </body>

      </html>
    `))
    .pipe(gulp.dest('./build'))
    .pipe(browsersync.stream())
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
    .src('./source/assets/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
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
  gulp.watch('./source/assets/scss/**/*', css)
  gulp.watch('./source/assets/js/**/*', scripts)
  gulp.watch(['./source/index.hbs', './source/assets/data/data.json'], handlebars)
  gulp.watch('./source/assets/img/**/*', images)
  gulp.watch('./source/md/**/*.md', md)
}

function fonts() {
  return gulp
    .src('./source/assets/fonts/**/*')
    .pipe(gulp.dest('./build/assets/fonts'))
}

const build = gulp.parallel(css, scripts, images, fonts, handlebars, md, () => {
  return gulp
    .src('./source/**/*.html')
    .pipe(gulp.dest('./build'))
}),
  watch = gulp.series(gulp.parallel(css, scripts, imagesMove, fonts, handlebars), gulp.parallel(watchFiles, browserSync))

exports.build = build
exports.watch = watch
exports.markdown = md

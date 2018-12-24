const gulp = require('gulp'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  browsersync = require('browser-sync').create()

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./source/"
    },
    port: 3000
  })
  done()
}

function browserSyncReload(done) {
  browsersync.reload()
  done()
}

function css() {
  return gulp
    .src("./source/assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest("./source/assets/css/"))
    .pipe(browsersync.stream())
}

function scripts() {
  return gulp
    .src("./source/assets/es6/**/*.js")
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest("./source/assets/js/"))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./source/assets/scss/**/*", css)
  gulp.watch("./source/assets/es6/**/*", scripts)
  gulp.watch([
    "./source/**/*.html",
    "./source/assets/img/**/*"
  ], browserSyncReload)
}

function build() {
  return gulp
    .src(["./source/**/*", "!./source/assets/{scss,scss/**/*}", "!./source/assets/{es6,es6/**/*}"])
    .pipe(gulp.dest("./build/"))
}

gulp.task('css', css)
gulp.task('js', scripts)

gulp.task('watch', gulp.parallel(css, scripts, watchFiles, browserSync))

gulp.task('build', gulp.series(gulp.series(css, scripts), build))

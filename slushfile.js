'use strict';

const path = require('path')
const gulp = require('gulp')
const install = require('gulp-install')
const template = require('gulp-template')
const conflict = require('gulp-conflict')
const rename = require('gulp-rename')
const _ = require('lodash')
_.mixin(require('lodash-inflection'))

const TEMPLATE_OPTS = {
  interpolate: /<%=([\s\S]+?)%>/g,
}

gulp.task('new', function(done) {
  const [name] = gulp.args

  // For some reason it missed some deeply nested JS files without a more explicit glob.
  // So I just listed a bunch of key extensions before the catch-all.
  // I have no idea why this is necessary.
  const SRC_GLOB = [
    __dirname + '/templates/new/**/*.js',
    __dirname + '/templates/new/**/*.md',
    __dirname + '/templates/new/**/*.eot',
    __dirname + '/templates/new/**/*.svg',
    __dirname + '/templates/new/**/*.ttf',
    __dirname + '/templates/new/**/*.woff',
    __dirname + '/templates/new/**/*.woff2',
    __dirname + '/templates/new/**/*',
  ]
  const DEST_PATH = './' + name

  gulp.src(SRC_GLOB, {dot: true})
    .pipe(conflict(DEST_PATH))
    .pipe(gulp.dest(DEST_PATH))
    .pipe(install())
    .on('end', done)
})

gulp.task('module', function(done) {
  const [name] = gulp.args

  const SRC_GLOB = __dirname + '/templates/module/**/*.js'
  const DEST_PATH = './src/js/app/' + name

  const vars = {
    pluralName: name,
    singularName: _.singularize(name),
  }

  const fileRenamer = function(path) {
    if(path.basename.startsWith('_')) {
      const varName = path.basename.substring(1)
      if(vars[varName]) {
        path.basename = vars[varName]
      }
    }
    return path
  }

  gulp.src(SRC_GLOB)
    .pipe(rename(fileRenamer))
    .pipe(template(vars, TEMPLATE_OPTS))
    .pipe(conflict(DEST_PATH))
    .pipe(gulp.dest(DEST_PATH))
    .pipe(install())
    .on('end', done)
})

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

gulp.task('readme', function() {
  const SRC_GLOB = __dirname + '/templates/README.md'
  const DEST_PATH = './'

  gulp.src(SRC_GLOB, {dot: true})
    .pipe(conflict(DEST_PATH))
    .pipe(gulp.dest(DEST_PATH))
})

gulp.task('new', function() {
  const [name] = gulp.args

  const SRC_GLOB = __dirname + '/templates/new/**/*'
  const DEST_PATH = './' + name

  gulp.src(SRC_GLOB, {dot: true})
    .pipe(conflict(DEST_PATH))
    .pipe(gulp.dest(DEST_PATH))
})

gulp.task('module', function() {
  const [name] = gulp.args

  const SRC_GLOB = __dirname + '/templates/module/**/*'
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
})

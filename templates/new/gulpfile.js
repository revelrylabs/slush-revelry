const gulp = require('gulp')
const createTasks = require('our-build-pipeline')
createTasks(gulp, {
  basePath: __dirname + '/',
  sassIncludePaths: [
    'src/css',
    'node_modules/foundation-sites/scss',
    'node_modules/revelry-components/scss',
  ]
})

const gulp = require('gulp')
const createTasks = require('our-build-pipeline')

const isProd = process.env.NODE_ENV === 'production'

const CDN_ASSET_PREFIX = '//bucket.s3.amazonaws.com'
const LOCAL_ASSET_PREFIX = '//localhost:8000'

const assetUrlPrefix = isProd ? CDN_ASSET_PREFIX : LOCAL_ASSET_PREFIX

createTasks(gulp, {
  assetUrlPrefix: assetUrlPrefix,
  basePath: __dirname + '/',
  sassIncludePaths: [
    'src/css',
    'node_modules/foundation-sites/scss',
    'node_modules/revelry-components/scss',
  ]
})

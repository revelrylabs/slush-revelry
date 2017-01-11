const req = require.context('app', true, /\.\/[^\/]+\/routes\.js$/)

export function names() {
  return req.keys().map((key) => key.substring(2, key.length - 10))
}

export function get(name) {
  return req(`./${name}/routes.js`).default
}

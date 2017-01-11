const req = require.context('app', true, /^\.\/[^\/]+\/views\/(.*)\.js$/)

export function get(name) {
  const [module, ...rest] = name.split('/')
  const path = [module, 'views', rest].join('/')

  return req(`./${path}.js`).default
}

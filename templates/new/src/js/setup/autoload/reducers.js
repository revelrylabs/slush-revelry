const req = require.context('app', true, /^\.\/[^\/]+\/state\/[^\/]+\.js$/)
const reducers = {}

req.keys().forEach((key) => {
  const name = key.match(/^\.\/[^\/]+\/state\/([^\/]+)\.js$/)[1]
  const reducer = req(key).default

  if (name && reducer) {
    if (reducers[name]) {
      throw new Error(`REDUCER AUTOLOAD: Duplicate state module name '${name}'`)
    }
    reducers[name] = reducer
  } else {
    // eslint-disable-next-line no-console
    console.warn(`REDUCER AUTOLOAD: Skipping state module '${key}' because it did not define a default export`)
  }
})

export default reducers

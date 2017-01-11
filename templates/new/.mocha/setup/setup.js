import jsdom from 'jsdom'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {shallow, mount, render} from 'enzyme'

export default function setup() {
  createDOM()
  configureChai()
  configureEnzyme()
  configurePropValidationErrors()
}

function createDOM() {
  global.document = jsdom.jsdom('')
  global.window = global.document.defaultView
  global.navigator = {
    userAgent: 'node.js'
  }

  Object.keys(global.document.defaultView).forEach((name) => {
    if (typeof global[name] === 'undefined') {
      global[name] = global.document.defaultView[name]
    }
  })
}

function configureChai() {
  chai.use(chaiAsPromised)
  global.expect = chai.expect
}

function configureEnzyme() {
  global.shallow = shallow
  global.mount = mount
  global.render = render
}

function configurePropValidationErrors() {
  const error = console.error
  console.error = function(warning, ...args) {
    if (/(Invalid prop|Failed prop type)/.test(warning)) {
      throw new Error(warning)
    }
    error.apply(console, [warning, ...args])
  }
}

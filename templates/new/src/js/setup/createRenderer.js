// BEFORE WE CONTINUE, WE NEED TO FIX A V8 BUG
// https://github.com/facebook/react/issues/6451
import objectAssign from 'object-assign'
Object.assign = objectAssign

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import setup from 'react-redux-universal-render'
import {get as getView} from './autoload/views'
import reducer from './reducer'

function createReduxStore(props) {
  return createStore(reducer, props, applyMiddleware(thunk))
}

const createRenderer = setup({getView, createReduxStore})

export default createRenderer

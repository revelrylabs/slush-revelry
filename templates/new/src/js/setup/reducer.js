import {combineReducers} from 'redux'
import reducers from './autoload/reducers'

const reduceData = combineReducers(reducers)

// This is a great place to perform custom operations on the full {name, data}
// state object
function reduceEverything(state, _action) {
  return state
}

export default function reducer(prevState, action) {
  let state = prevState
  const data = reduceData(state.data, action)

  if (data !== state.data) {
    state = {...state, data}
  }

  return reduceEverything(state, action)
}

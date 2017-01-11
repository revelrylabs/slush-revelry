import {createStore} from 'redux'
import reducer from '../widgets'

describe('widgets state: widgets', () => {
  let store = null

  beforeEach(() => {
    store = createStore(reducer)
  })

  it('has the correct initial state', () => {
    expect(store.getState()).to.eql([])
  })
})

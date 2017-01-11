import {createStore} from 'redux'
import reducer from '../widget'

describe('widgets state: widget', () => {
  let store = null

  beforeEach(() => {
    store = createStore(reducer)
  })

  it('has the correct initial state', () => {
    expect(store.getState()).to.eql({})
  })
})

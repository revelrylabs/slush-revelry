import {createStore} from 'redux'
import reducer from '../<%= singularName %>'

describe('<%= pluralName %> state: <%= singularName %>', () => {
  let store = null

  beforeEach(() => {
    store = createStore(reducer)
  })

  it('has the correct initial state', () => {
    expect(store.getState()).to.eql({})
  })
})

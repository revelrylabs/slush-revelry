import {createStore} from 'redux'
import reducer from '../<%= pluralName %>'

describe('<%= pluralName %> state: <%= pluralName %>', () => {
  let store = null

  beforeEach(() => store = createStore(reducer))

  it('has the correct initial state', () => {
    expect(store.getState()).to.eql([])
  })
})

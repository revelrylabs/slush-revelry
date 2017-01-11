import React from 'react'
import New from '../new'

function createComponentWithValidProps() {
  const <%= singularName %> = {
    id: 1,
    name: '<%= singularName %> 1',
  }

  return (
    <New <%= singularName %>={<%= singularName %>} />
  )
}

describe('<%= pluralName %> view: new', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

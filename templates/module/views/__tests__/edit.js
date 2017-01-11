import React from 'react'
import Edit from '../edit'

function createComponentWithValidProps() {
  const <%= singularName %> = {
    id: 1,
    name: '<%= singularName %> 1',
  }

  return (
    <Edit <%= singularName %>={<%= singularName %>} />
  )
}

describe('<%= pluralName %> view: edit', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

import React from 'react'
import ListItem from '../ListItem'

function createComponentWithValidProps() {
  const <%= singularName %> = {
    id: 1,
    name: '<%= singularName %> 1',
  }

  return (
    <ListItem <%= singularName %>={<%= singularName %>} />
  )
}

describe('<%= pluralName %> component: ListItem', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

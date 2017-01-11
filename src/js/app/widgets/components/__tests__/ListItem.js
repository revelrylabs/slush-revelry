import React from 'react'
import ListItem from '../ListItem'

function createComponentWithValidProps() {
  const widget = {
    id: 1,
    name: 'widget 1',
  }

  return (
    <ListItem widget={widget} />
  )
}

describe('widgets component: ListItem', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

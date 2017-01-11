import React from 'react'
import Edit from '../edit'

function createComponentWithValidProps() {
  const widget = {
    id: 1,
    name: 'widget 1',
  }

  return (
    <Edit widget={widget} />
  )
}

describe('widgets view: edit', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

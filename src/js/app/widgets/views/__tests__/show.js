import React from 'react'
import Show from '../show'

function createComponentWithValidProps() {
  const widget = {
    id: 1,
    name: 'widget 1',
  }

  return (
    <Show widget={widget} />
  )
}

describe('widgets view: show', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

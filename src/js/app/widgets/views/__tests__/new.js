import React from 'react'
import New from '../new'

function createComponentWithValidProps() {
  const widget = {
    id: 1,
    name: 'widget 1',
  }

  return (
    <New widget={widget} />
  )
}

describe('widgets view: new', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

import React from 'react'
import New from '../new'

function createComponentWithValidProps() {
  return (
    <New />
  )
}

describe('passwords view: new', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

import React from 'react'
import New from '../new'

function createComponentWithValidProps() {
  return (
    <New user={{email: 'user@example.com', password: 'password!1234'}} />
  )
}

describe('sessions view: new', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

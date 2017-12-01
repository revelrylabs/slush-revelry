import React from 'react'
import New from '../new'

const validRegistration = {
  email: 'user@example.com',
  password: 'password!1234',
  password_confirmation: 'password!1234',
}

function createComponentWithValidProps() {
  return (
    <New registration={{...validRegistration}} />
  )
}

describe('registrations view: new', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

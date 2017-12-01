import React from 'react'
import Edit from '../edit'

function createComponentWithValidProps() {
  const user = {
    email: 'user@example.com',
    'reset_password_token': '1234',
  }

  return (
    <Edit user={user} />
  )
}

describe('passwords view: edit', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

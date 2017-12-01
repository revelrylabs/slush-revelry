import React from 'react'
import Form from '../Form'

const validRegistration = {
  email: 'user@example.com',
  password: 'password!1234',
  passwordConfirmation: 'password!1234',
}

function createComponentWithValidProps() {
  return (
    <Form registration={{...validRegistration}} />
  )
}

function createComponentWithErrors() {
  const errors = {passwordConfirmation: 'does not match'}

  return (
    <Form registration={{...validRegistration, errors}} />
  )
}

describe('registrations component: Form', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })

  it('renders the correct inputs', () => {
    const wrapper = mount(createComponentWithValidProps())

    expect(wrapper.find('input[type="text"]')).to.have.length(1)
    expect(wrapper.find('input[type="password"]')).to.have.length(2)
  })

  it('renders errors when present', () => {
    const wrapper = mount(createComponentWithErrors())

    expect(wrapper.find('.form-error.is-visible.rev-InputErrors')).to.have.length(1)
  })
})

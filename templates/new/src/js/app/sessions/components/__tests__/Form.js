import React from 'react'
import Form from '../Form'

function createComponentWithValidProps() {
  return (
    <Form user={{email: 'user@example.com', password: 'password!1234'}} />
  )
}

describe('sessions component: Form', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })

  it('renders the correct inputs', () => {
    const wrapper = mount(createComponentWithValidProps())

    expect(wrapper.find('input[type="text"]')).to.have.length(1)
    expect(wrapper.find('input[type="password"]')).to.have.length(1)
  })
})

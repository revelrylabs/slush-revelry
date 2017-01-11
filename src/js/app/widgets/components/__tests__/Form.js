import React from 'react'
import Form from '../Form'

function createComponentWithValidProps() {
  const widget = {
    id: 1,
    name: 'widget 1',
  }

  return (
    <Form widget={widget} />
  )
}

describe('widgets component: Form', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

import React from 'react'
import Form from '../Form'

function createComponentWithValidProps() {
  const <%= singularName %> = {
    id: 1,
    name: '<%= singularName %> 1',
  }
  return (
    <Form <%= singularName %>={<%= singularName %>}>
    </Form>
  )
}

describe('<%= pluralName %> component: Form', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

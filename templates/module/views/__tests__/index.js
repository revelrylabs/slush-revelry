import React from 'react'
import Index from '../index'

function createComponentWithValidProps() {
  const <%= pluralName %> = [
    {id: 1, name: '<%= singularName %> 1'},
    {id: 2, name: '<%= singularName %> 2'},
  ]
  return (
    <Index <%= pluralName %>={<%= pluralName %>}>
    </Index>
  )
}

describe('<%= pluralName %> view: index', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

import React from 'react'
import Show from '../show'

function createComponentWithValidProps() {
  const <%= singularName %> = {
    id: 1,
    name: '<%= singularName %> 1',
  }
  return (
    <Show <%= singularName %>={<%= singularName %>}>
    </Show>
  )
}

describe('<%= pluralName %> view: show', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

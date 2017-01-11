import React from 'react'
import Index from '../index'

function createComponentWithValidProps() {
  const widgets = [
    {id: 1, name: 'widget 1'},
    {id: 2, name: 'widget 2'},
  ]

  return (
    <Index widgets={widgets} />
  )
}

describe('widgets view: index', () => {
  it('can shallow render with valid props', () => {
    shallow(createComponentWithValidProps())
  })
})

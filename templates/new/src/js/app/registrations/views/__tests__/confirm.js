import React from 'react'
import Confirm from '../confirm'

function createComponentWithValidProps() {
  return (
    <Confirm />
  )
}

describe('brokerages view: confirm', () => {
  it('can shallow render', () => {
    shallow(createComponentWithValidProps())
  })
})

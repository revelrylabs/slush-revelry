import React, {PropTypes} from 'react'
import {Input} from 'revelry-components/lib/forms'
import Button from 'revelry-components/lib/Button'
import shape from '../shape'

export default function Form({widget, ...props}) {
  return (
    <form {...props}>
      <Input.Stack
        label="name"
        name="widgets[name]"
        defaultValue={widget.name}
      />
      <Button>Save</Button>
    </form>
  )
}

Form.propTypes = {
  widget: PropTypes.shape(shape).isRequired,
}

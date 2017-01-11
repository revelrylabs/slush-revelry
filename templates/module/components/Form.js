import React, {PropTypes} from 'react'
import {Input} from 'revelry-components/lib/forms'
import Button from 'revelry-components/lib/Button'
import shape from '../shape'

export default function Form({<%= singularName %>, ...props}) {
  return (
    <form {...props}>
      <Input.Stack
        label="name"
        name="<%= pluralName %>[name]"
        defaultValue={<%= singularName %>.name}
      />
      <Button>Save</Button>
    </form>
  )
}

Form.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

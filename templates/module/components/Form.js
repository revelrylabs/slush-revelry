import React, {PropTypes} from 'react'
import {Form, Input} from 'possum/lib/forms'
import Button from 'possum/lib/Button'
import shape from '../shape'

export default function <%= singularName %>Form({<%= singularName %>, ...props}) {
  return (
    <Form {...props}>
      <Input.Stack
        label="name"
        name="<%= pluralName %>[name]"
        defaultValue={<%= singularName %>.name}
      />
      <Button>Save</Button>
    </Form>
  )
}

<%= singularName %>Form.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

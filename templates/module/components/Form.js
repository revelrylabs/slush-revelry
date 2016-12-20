import React from 'react'
import {Form, Input} from 'revelry-components/lib/forms'
import Button from 'revelry-components/lib/Button'

export default function({<%= singularName %>, ...props}) {
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

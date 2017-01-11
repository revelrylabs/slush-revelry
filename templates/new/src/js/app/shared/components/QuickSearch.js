import React from 'react'
import Button from 'revelry-components/lib/Button'
import Icon from 'revelry-components/lib/Icon'
import {Form, InputGroup, Input} from 'revelry-components/lib/forms'

export default function QuickSearch() {
  return (
    <Form>
      <InputGroup style={{margin: 0}}>
        <InputGroup.Field>
          <Input type="text" name="q" placeholder="Search" />
        </InputGroup.Field>
        <InputGroup.Button>
          <Button><Icon i="search" /></Button>
        </InputGroup.Button>
      </InputGroup>
    </Form>
  )
}

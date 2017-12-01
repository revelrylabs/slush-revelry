import React from 'react'
import Layout from 'app/shared/components/Layout'
import {Form, Input, Button} from 'revelry-components/lib/forms'

export default function New() {
  return (
    <Layout>
      <Form action="/users/password" method="POST">
        <h3>Enter your email address to request a password reset.</h3>
        <Input.Stack
          label="Email"
          type="text"
          name="user[email]"
          placeholder="Your email address"
        />
        <Button expanded type="submit">
          Reset password
        </Button>
      </Form>
    </Layout>
  )
}

import React, {PropTypes} from 'react'
import {Row, Col} from 'revelry-components/lib/grid'
import {Form, Input, Button} from 'revelry-components/lib/Form'
import {errorExtractor} from 'app/shared/util.js'
import shape from '../shape'

export default function RegistrationForm({registration: {errors, email}}) {
  const errorFor = errorExtractor(errors)

  return (
    <Form action="/register" method="POST">
      <h3>Sign up</h3>
      <Input.Stack
        label="Email"
        type="text"
        name="user[email]"
        placeholder="enter your email"
        defaultValue={email}
        error={errorFor('email')}
      />
      <Input.Stack
        label="Password"
        type="password"
        name="user[password]"
        placeholder="create your password"
        error={errorFor('password')}
      />
      <Input.Stack
        label="Confirm Password"
        type="password"
        name="user[password_confirmation]"
        placeholder="confirm your password"
        error={errorFor('password_confirmation')}
      />
      <Button expanded type="submit">
        Register
      </Button>
    </Form>
  )
}

RegistrationForm.propTypes = {
  registration: PropTypes.shape(shape).isRequired,
}

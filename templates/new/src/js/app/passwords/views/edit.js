import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'revelry-components/lib/grid'
import Layout from 'app/shared/components/Layout'
import {Form, Input, Button} from 'revelry-components/lib/forms'
import {errorExtractor} from 'app/shared/util'
import shape from '../shape'

export default function Edit({user: {errors, reset_password_token}}) {
  const errorFor = errorExtractor(errors)

  return (
    <Layout>
      <Form action="/users/password" method="PATCH">
        <h3>Change your password</h3>
        <Input.Stack
          label="Password"
          type="password"
          name="user[password]"
          placeholder="Enter your new password"
          error={errorFor('password')}
        />
        <Input.Stack
          label="Password (confirmation)"
          type="password"
          name="user[password_confirmation]"
          placeholder="Enter it again to confirm"
          error={errorFor('password_confirmation')}
        />
        <Input
          class="hidden"
          name="user[reset_password_token]"
          type="hidden"
          value={reset_password_token}
        />
        <Button expanded type="submit">Submit</Button>
      </Form>
    </Layout>
  )
}

Edit.propTypes = {
  user: PropTypes.shape(shape),
}

import React from 'react'
import {Row, Col} from 'revelry-components/lib/grid'
import {Form, Input, Button} from 'revelry-components/lib/forms'
import shape from '../shape'

export default function SessionForm({user}) {
  return (
    <div className="Section large">
      <Row>
        <Col medium={5} className="medium-centered rev-Col--mediumCentered">
          <Form className="rev-newUser" action="/users/sign_in" method="POST">
            <h3>Log in to get started</h3>
            <Input.Stack
              label="Email"
              type="text"
              name="user[email]"
              placeholder="enter your email"
              defaultValue={user.email}
            />
            <Input.Stack
              label="Password"
              type="password"
              name="user[password]"
              placeholder="enter your password"
            />
            <Button expanded type="submit">
              Sign In
            </Button>
            <a href="/users/password/new">Forgot Password?</a>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

SessionForm.propTypes = {
  user: React.PropTypes.shape(shape).isRequired,
}

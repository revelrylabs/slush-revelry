import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function New({widget}) {
  return (
    <Layout>
      <h1>
        <a href="/widgets">widgets</a> : new
      </h1>
      <Form
        widget={widget}
        method="post"
        action="/widgets"
      />
    </Layout>
  )
}

New.propTypes = {
  widget: PropTypes.shape(shape).isRequired,
}

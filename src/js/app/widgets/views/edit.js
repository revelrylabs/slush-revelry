import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function Edit({widget}) {
  const {id} = widget

  return (
    <Layout>
      <h1>
        <a href="/widgets">widgets</a> : <a href={`/widgets/${id}`}>{id}</a> : edit
      </h1>
      <Form
        widget={widget}
        method="post"
        action={`/widgets/${id}`}
      />
    </Layout>
  )
}

Edit.propTypes = {
  widget: PropTypes.shape(shape).isRequired,
}

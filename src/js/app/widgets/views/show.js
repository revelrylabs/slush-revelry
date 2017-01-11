import React, {PropTypes} from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'
import Callout from 'revelry-components/lib/Callout'
import shape from '../shape'

export default function Show({widget}) {
  const {id} = widget

  return (
    <Layout>
      <h1>
        <a href="/widgets">widgets</a> : <a href={`/widgets/${id}`}>{id}</a>
      </h1>
      <Callout secondary><pre>{JSON.stringify(widget, null, '  ')}</pre></Callout>
      <Button href={`/widgets/${id}/edit`}>Edit</Button>
    </Layout>
  )
}

Show.propTypes = {
  widget: PropTypes.shape(shape).isRequired,
}

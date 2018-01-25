import React, {PropTypes} from 'react'
import Button from 'possum/lib/Button'
import Layout from 'app/shared/components/Layout'
import Callout from 'possum/lib/Callout'
import shape from '../shape'

export default function Show({<%= singularName %>}) {
  const {id} = <%= singularName %>

  return (
    <Layout>
      <h1>
        <a href="/<%= pluralName %>"><%= pluralName %></a> : <a href={`/<%= pluralName %>/${id}`}>{id}</a>
      </h1>
      <Callout secondary><pre>{JSON.stringify(<%= singularName %>, null, '  ')}</pre></Callout>
      <Button href={`/<%= pluralName %>/${id}/edit`}>Edit</Button>
    </Layout>
  )
}

Show.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

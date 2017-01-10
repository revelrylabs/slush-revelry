import React from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'
import Callout from 'revelry-components/lib/Callout'

export default function Show({<%= singularName %>, ...props}) {
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

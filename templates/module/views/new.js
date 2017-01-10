import React from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'

export default function New({<%= singularName %>={}, ...props}) {
  return (
    <Layout>
      <h1>
        <a href="/<%= pluralName %>"><%= pluralName %></a> : new
      </h1>
      <Form
        <%= singularName %>={<%= singularName %>}
        method="post"
        action="/<%= pluralName %>"
      />
    </Layout>
  )
}

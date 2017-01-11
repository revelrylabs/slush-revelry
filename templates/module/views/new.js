import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function New({<%= singularName %>}) {
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

New.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

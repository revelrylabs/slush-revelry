import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function Edit({<%= singularName %>}) {
  const {id} = <%= singularName %>

  return (
    <Layout>
      <h1>
        <a href="/<%= pluralName %>"><%= pluralName %></a> : <a href={`/<%= pluralName %>/${id}`}>{id}</a> : edit
      </h1>
      <Form
        <%= singularName %>={<%= singularName %>}
        method="post"
        action={`/<%= pluralName %>/${id}`}
      />
    </Layout>
  )
}

Edit.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

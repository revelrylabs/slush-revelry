import React, {PropTypes} from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'
import ListItem from '../components/ListItem'
import shape from '../shape'

function renderListItem(<%= singularName %>) {
  const {id} = <%= singularName %>

  return (
    <ListItem
      key={id}
      <%= singularName %>={<%= singularName %>}
    />
  )
}

export default function Index({<%= pluralName %>}) {
  return (
    <Layout>
      <h1><%= pluralName %></h1>
      <Button href="/<%= pluralName %>/new">Create a new <%= singularName %></Button>
      {<%= pluralName %>.map(renderListItem)}
    </Layout>
  )
}

Index.propTypes = {
  <%= pluralName %>: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
}

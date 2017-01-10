import React, {Children} from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'
import ListItem from '../components/ListItem'

export default function Index({<%= pluralName %>, ...props}) {
  return (
    <Layout>
      <h1><%= pluralName %></h1>
      <Button href={`/<%= pluralName %>/new`}>Create a new <%= singularName %></Button>
      {<%= pluralName %>.map((<%= singularName %>) => <ListItem key={<%= singularName %>.id} {...<%= singularName %>} />)}
    </Layout>
  )
}

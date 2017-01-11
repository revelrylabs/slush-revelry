import React, {PropTypes} from 'react'
import Button from 'revelry-components/lib/Button'
import Layout from 'app/shared/components/Layout'
import ListItem from '../components/ListItem'
import shape from '../shape'

function renderListItem(widget) {
  const {id} = widget

  return (
    <ListItem
      key={id}
      widget={widget}
    />
  )
}

export default function Index({widgets}) {
  return (
    <Layout>
      <h1>widgets</h1>
      <Button href="/widgets/new">Create a new widget</Button>
      {widgets.map(renderListItem)}
    </Layout>
  )
}

Index.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
}

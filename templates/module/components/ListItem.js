import React, {PropTypes} from 'react'
import shape from '../shape'

export default function ListItem({<%= singularName %>}) {
  const {id, name} = <%= singularName %>

  return (
    <li><a href={`/<%= pluralName %>/${id}`}>{name}</a></li>
  )
}

ListItem.propTypes = {
  <%= singularName %>: PropTypes.shape(shape).isRequired,
}

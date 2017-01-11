import React, {PropTypes} from 'react'
import shape from '../shape'

export default function ListItem({widget}) {
  const {id, name} = widget

  return (
    <li><a href={`/widgets/${id}`}>{name}</a></li>
  )
}

ListItem.propTypes = {
  widget: PropTypes.shape(shape).isRequired,
}

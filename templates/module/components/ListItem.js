import React from 'react'

export default function ListItem({id, name}) {
  return (
    <li><a href={`/<%= pluralName %>/${id}`}>{name}</a></li>
  )
}

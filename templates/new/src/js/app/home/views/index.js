import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'

export default function Index({title}) {
  return (
    <Layout>
      <h1>Welcome to {title}</h1>
    </Layout>
  )
}

Index.propTypes = {
  title: PropTypes.string,
}

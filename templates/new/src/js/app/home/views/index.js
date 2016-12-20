import React from 'react'
import Layout from 'app/shared/components/Layout'

export default function HomeIndex({title}) {
  return (
    <Layout>
      <h1>Welcome to {title}</h1>
    </Layout>
  )
}

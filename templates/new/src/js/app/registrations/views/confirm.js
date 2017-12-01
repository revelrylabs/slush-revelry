import React from 'react'
import Layout from 'app/shared/components/Layout'
import Card from 'revelry-components/lib/Card'

export default function Confirm() {
  return (
    <Layout>
      <Card>
        <h2>Thank you!</h2>
        <p>Please check your email to complete your registration.</p>
      </Card>
    </Layout>
  )
}

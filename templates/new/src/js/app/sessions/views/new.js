import React, {PropTypes} from 'react'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function New({user}) {
  return (
    <Layout>
      <Form user={user} />
    </Layout>
  )
}

New.propTypes = {
  user: PropTypes.shape(shape).isRequired,
}

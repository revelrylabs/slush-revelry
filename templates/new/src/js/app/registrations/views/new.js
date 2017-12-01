import React, {PropTypes} from 'react'
import {Row, Col} from 'revelry-components/lib/grid'
import Layout from 'app/shared/components/Layout'
import Form from '../components/Form'
import shape from '../shape'

export default function New({registration}) {
  return (
    <Layout>
      <Form registration={registration} />
    </Layout>
  )
}

New.propTypes = {
  registration: PropTypes.shape(shape).isRequired,
}

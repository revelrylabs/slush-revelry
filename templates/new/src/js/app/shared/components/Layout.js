import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import TopBar from './TopBar'
import {Row, Col} from 'possum/lib/grid'
import {connect} from 'react-redux'
import AuthenticityTokenProvider from './AuthenticityTokenProvider'

function MainLayout({title, children}) {
  return (
    <AuthenticityTokenProvider>
      <div>
        <Helmet
          defaultTitle={title}
          link={[
            {href: '/css/site.css', rel: 'stylesheet'},
          ]}
          script={[
            {src: '/js/client.js', type: 'text/javascript'},
          ]}
        />
        <TopBar title={title} />
        <Row>
          <Col small={12}>
            {children}
          </Col>
        </Row>
      </div>
    </AuthenticityTokenProvider>
  )
}

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default connect(({data}) => ({title: data.title}))(MainLayout)

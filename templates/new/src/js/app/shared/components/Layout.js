import React, {PropTypes} from 'react'
import Helmet from 'react-helmet'
import TopBar from './TopBar'
import {Row, Col} from 'revelry-components/lib/grid'
import {connect} from 'react-redux'

function MainLayout({title, children}) {
  return (
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
  )
}

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default connect(({data}) => ({title: data.title}))(MainLayout)

import {connect} from 'react-redux'
import AuthenticityTokenProvider from 'possum/lib/AuthenticityTokenProvider'

const mapStateToProps = ({data: {authenticityToken}}) => authenticityToken

export default connect(mapStateToProps)(AuthenticityTokenProvider)

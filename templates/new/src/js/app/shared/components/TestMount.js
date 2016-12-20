import React, {Component} from 'react'

export default class TestMount extends Component {
  state = {isMounted: false}
  componentDidMount() {
    this.setState({isMounted: true})
  }
  render() {
    return <p>{this.state.isMounted ? 'Mounted.' : 'Not mounted.'}</p>
  }
}

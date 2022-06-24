import React, { Component } from 'react'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Sathvik'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return true
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return true
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleB componentDidUpdate')
	}

  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
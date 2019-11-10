import React, { Component } from 'react'
import {View,Text} from 'react-native'

class LifecycleB extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'from Lifecycle B STATE'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
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
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleB componentDidUpdate')
	}

  render() {
    console.log('LifecycleB render')
    return (
      <View>
        <Text>LifecycleB</Text>
        <Text> {this.state.name}</Text>

      </View>
    )
  }
}

export default LifecycleB
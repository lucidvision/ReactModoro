import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Splash } from '~/components'

export default class SplashContainer extends Component {
  handleLoginFinished = (error, result) => {
    if (error) {
      console.warn('ERror in handleLoginFinished', error)
    } else if (result.isCancelled === true) {
      console.log('Auth Cancelled')
    } else {
      console.log('Auth Successful')
    }
  }
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished} />
    )
  }
}

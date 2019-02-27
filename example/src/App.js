import React, { Component } from 'react'

import ReactUpgradeBlock from 'react-upgrade-block'
import Image from './images/react.png'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
    this.maxValue = 10
  }

  handleClick = () => {
    const { value } = this.state
    if (value >= this.maxValue) {
      return
    }
    this.setState({ value: this.state.value + 1 })
  }

  render () {
    return (
      <div>
        <ReactUpgradeBlock
          image={Image}
          size={70}
          borderRadius={10}
          borderColor="#CCDDEE"
          borderWidth={2}
          buttonSize={20}
          buttonShift={5}
          buttonBorderColor="#FF5555"
          buttonColor="#EE5555"
          value={this.state.value}
          maxValue={this.maxValue}
          fontSize={16}
          textColor="#FF0000"
          textShift={2}
          onClick={this.handleClick} />
      </div>
    )
  }
}

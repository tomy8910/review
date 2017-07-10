import React, { Component } from 'react'

export default class Pass2 extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        Let me display the counter: {this.props.counter}
      </div>
    )
  }
}

import React, { Component } from 'react'
import './App.css'
import Pass from './Pass'

const haha =
  'https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/15284096_1297887133566925_4777882303825093241_n.jpg?oh=6ed4a12e310a2b562e4fd38cc34ee290&oe=5A0038E2'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }

    this.makeBulokMoves = this.makeBulokMoves.bind(this)
    this.makeMoneyEverywhere = this.makeMoneyEverywhere.bind(this)
  }
  makeBulokMoves() {
    this.setState(prevState => {
      prevState.counter += 1
    })
  }

  makeMoneyEverywhere() {
    return haha
  }
  render() {
    return (
      <div>
        <Pass
          babe="Doms girl"
          name="Tomy"
          makeBulokMoves={this.makeBulokMoves}
          makeMoneyEverywhere={haha}
        />
      </div>
    )
  }
}

export default App

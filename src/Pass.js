import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'

const BabyGirl = styled.div`
  height: 100vh;
  background-color: #00ffff;
  position: relative;
`
const RandomPic = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: calc(${props => props.top} - 100px);
  left: calc(${props => props.left} - 100px);
  border-radius: ${props => props.radius};
`
const RandomPi = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: calc(${props => props.top} - 100px);
  left: calc(${props => props.left} - 100px);
  border-radius: ${props => props.radius};
`

export default class Pass extends Component {
  constructor() {
    super()

    this.state = {
      imgs: 0,
      rand: [],
      keys: [],
      pigs: 0,
      rand2: []
    }
    this.destroyWorld = this.destroyWorld.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.destroyWorlds = this.destroyWorlds.bind(this)
  }

  destroyWorld() {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand = [...this.state.rand]
    rand.push([left, top, radius])
    this.setState({
      imgs: (this.state.imgs += 1),
      rand
    })
    console.log(this.state.imgs)
  }
  destroyWorlds() {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand2 = [...this.state.rand2]
    rand2.push([left, top, radius])
    this.setState({
      pigs: (this.state.pigs += 1),
      rand2
    })
    console.log(this.state.pigs)
  }
  handleKeyPress(e) {
    const keys = [...this.state.keys]
    let key = keys
    if (key.slice(-4, key.length).join('').toLowerCase() === 'doms') {
      console.log(key.slice(-4, key.length).join('').toLowerCase())
      this.destroyWorld()
    }
    if (key.slice(-4, key.length).join('').toLowerCase() === 'toms') {
      console.log(key.slice(-4, key.length).join('').toLowerCase())
      this.destroyWorlds()
    }

    keys.push(e.key)
    this.setState({
      keys
    })
    //this.destroyWorld()
    console.log(this.state.keys)
    console.log()
  }
  render() {
    return (
      <BabyGirl
        innerRef={input => (this.haha = input)}
        onKeyDown={this.handleKeyPress}
        tabIndex="0"
      >
        {Array(this.state.imgs).fill(this.state.imgs).map((el, i) => {
          return (
            <RandomPic
              key={i}
              src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/15284096_1297887133566925_4777882303825093241_n.jpg?oh=6ed4a12e310a2b562e4fd38cc34ee290&oe=5A0038E2"
              top={`${this.state.rand[i][0]}%`}
              left={`${this.state.rand[i][1]}%`}
              radius={`${this.state.rand[i][2]}px`}
              alt="piggydoms"
            />
          )
        })}
        {Array(this.state.pigs).fill(this.state.pigs).map((el, i) => {
          return (
            <RandomPic
              key={i}
              src="https://i.ytimg.com/vi/Ikw5HhxC5UM/hqdefault.jpg"
              top={`${this.state.rand2[i][0]}%`}
              left={`${this.state.rand2[i][1]}%`}
              radius={`${this.state.rand2[i][2]}px`}
              alt="piggy"
            />
          )
        })}
      </BabyGirl>
    )
  }
}

Pass.propTypes = {
  name: PropTypes.string.isRequired,
  makeBulokMoves: PropTypes.func.isRequired
}

Pass.defaultProps = {
  babe: 'piggyman'
}

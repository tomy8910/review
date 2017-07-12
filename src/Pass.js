import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

export default class Pass extends Component {
  constructor() {
    super()

    this.state = {
      imgs: 0,
      rand: [],
      keys: [],
      pigs: 0,
      rand2: [],
      pandas: 0,
      rand3: []
    }
    this.destroyWorld = this.destroyWorld.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.destroyWorlds = this.destroyWorlds.bind(this)
    this.destroyWorldss = this.destroyWorldss.bind(this)
  }

  destroyWorld() {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand = [...this.state.rand]
    let imgs = this.state.imgs
    imgs++
    rand.push([left, top, radius])
    this.setState({
      imgs,
      rand
    })
    console.log(this.state.imgs)
  }
  destroyWorlds() {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand2 = [...this.state.rand2]
    let pigs = this.state.pigs
    pigs++
    rand2.push([left, top, radius])
    this.setState({
      pigs,
      rand2
    })
    console.log(this.state.pigs)
  }
  destroyWorldss() {
    const left = Math.floor(Math.random() * 100)
    const top = Math.floor(Math.random() * 100)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand3 = [...this.state.rand3]
    let pandas = this.state.pandas
    pandas++
    rand3.push([left, top, radius])
    this.setState({
      pandas,
      rand3
    })
    console.log(this.state.pandas)
  }
  handleKeyPress(e) {
    const keys = [...this.state.keys, ...e.key]

    this.setState({ keys })
    if (keys.slice(-4, keys.length).join('').toLowerCase() === 'doms') {
      console.log(keys.slice(-4, keys.length).join('').toLowerCase())
      this.destroyWorld()
    }
    if (keys.slice(-4, keys.length).join('').toLowerCase() === 'toms') {
      console.log(keys.slice(-4, keys.length).join('').toLowerCase())
      this.destroyWorlds()
    }
    if (keys.slice(-5, keys.length).join('').toLowerCase() === 'panda') {
      console.log(keys.slice(-4, keys.length).join('').toLowerCase())
      this.destroyWorldss()
    }
    console.log(keys)
    console.log(keys.slice(-4, keys.length))
  }

  render() {
    return (
      <BabyGirl
        innerRef={input => (this.haha = input)}
        onKeyPress={this.handleKeyPress}
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
        {Array(this.state.pandas).fill(this.state.pandas).map((el, i) => {
          return (
            <RandomPic
              key={i}
              src="https://pbs.twimg.com/media/CdlFCYmXIAAGkiH.jpg"
              top={`${this.state.rand3[i][0]}%`}
              left={`${this.state.rand3[i][1]}%`}
              radius={`${this.state.rand3[i][2]}px`}
              alt="panda"
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

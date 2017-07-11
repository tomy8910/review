import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BabyGirl = styled.div`
  height: 100vh;
  background-color: palevioletred;
  position: relative;
`
const RandomPic = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  border-radius: ${props => props.radius};
`

export default class Pass extends Component {
  constructor() {
    super()

    this.state = {
      imgs: 0,
      rand: []
    }
    this.destroyWorld = this.destroyWorld.bind(this)
  }

  destroyWorld() {
    const left = Math.floor(Math.random() * 70)
    const top = Math.floor(Math.random() * 70)
    const radius = Math.floor(Math.random() * 10 + 1)
    const rand = [...this.state.rand]
    rand.push([left, top, rand])
    this.setState({
      imgs: (this.state.imgs += 1),
      rand
    })
    console.log(this.state.imgs)
  }

  render() {
    return (
      <BabyGirl
        innerRef={input => (this.haha = input)}
        onClick={this.destroyWorld}
      >
        {/*} Hi my name is {this.props.name}
        // <button onClick={this.props.makeBulokMoves}>Haha</button>
        // I am {this.props.babe}
        {*/}

        {Array(this.state.imgs).fill(this.state.imgs).map((el, i) => {
          return (
            <RandomPic
              key={i}
              src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/15284096_1297887133566925_4777882303825093241_n.jpg?oh=6ed4a12e310a2b562e4fd38cc34ee290&oe=5A0038E2"
              top={`${this.state.rand[i][0]}%`}
              left={`${this.state.rand[i][1]}%`}
              radius={`${this.state.rand[i][2]}px`}
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

import React, { Component } from 'react'
const images = import.meta.globEager('../assets/cards/*.png')
import './card.css'
export const SUITS = {
  h: {
    name: "hearts",
    color: "red"
  },
  d: {
    name: "diamonds",
    color: "red"
  },
  s: {
    name: "spades",
    color: "black"
  },
  c: {
    name: "clubs",
    color: "black"
  }
}
class Card extends Component {
  
  constructor(props){
    super(props)

    const suit = SUITS[this.props.id.substr(0,1)].name
    const value = this.props.id.substr(1)
    const cardName = `card_${suit}_${value}`

    this.state ={
      open: this.props.open,
      img: cardName
    }
  }
  render(){
    return(
      <div className="card">
        <img src={this.state.img}>

        </img>
      </div>
    )
  }
}

export default Card
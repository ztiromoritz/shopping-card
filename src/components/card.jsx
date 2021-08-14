import React, { Component } from 'react'
import './card.css'
const images = import.meta.globEager('../assets/cards/*.png');
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
    const cardName = `../assets/cards/card_${suit}_${value}.png`

    console.log("cardName", cardName);
    console.log("images", images);
    this.state ={
      open: this.props.open,
      img: images[cardName].default
    }
  }
  render(){
    console.log("img", this.state.img);
    return(
      <div className="card">
        
        <img src={this.state.img}>

        </img>
      </div>
    )
  }
}

export default Card
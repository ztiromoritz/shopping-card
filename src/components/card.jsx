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
    const cardBack = '../assets/cards/card_back.png'

    console.log("cardName", cardName);
    console.log("images", images);
    try {      
      this.state ={
        img: images[cardName].default,
        back: images[cardBack].default
      }
    } catch (error) {
      console.error(error, cardName)
    }
  }
  render(){
    console.log("img", this.state.img);
    const imgSrc = this.props.open ? this.state.img : this.state.back
    return(
      <div 
        className={`card ${this.props.draggable ? "draggable" : ""}`} 
        style={{
          zIndex: this.props.z || 0,
          background: `url(${imgSrc}) no-repeat center center`,
          top: this.props.y || 0
        }}
        onClick={this.props.onClick}
        onMouseDown={(e) => this.props.onMouseDown(e)}> 
      </div>
    )
  }
}

export default Card
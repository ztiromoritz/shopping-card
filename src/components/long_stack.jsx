import React, { Component } from "react";
import Card from "./card"

const STACK_OFFSET = 15
class LongStack extends Component {
  constructor(props){
    super(props)
  }

  render(){
    if(this.props.dragging){
      console.log("ghostStack posX:", this.props.posX)
      console.log("ghostStack posY:", this.props.posY)
    }
    return(
      <div className={`stack ${this.props.dragging ? "dragging" : ""}`} style={
        {
          position: this.props.dragging ? "absolute" : "relative",
          top: this.props.dragging ? this.props.posY : 0,
          left: this.props.dragging ? this.props.posX : 0
        }}>
        {this.props.cards
          .map((card, index) => {
            if(this.props.hideCards && this.props.hideCards.includes(card)){
              return null
            }
            return(<Card 
              key={card.id}
              id={card.id}
              open={card.open}
              onMouseDown={(e) => this.props.onMouseDown && this.props.onMouseDown(e, card.id) }
              z={index}
              y={index * (this.props.stackOffset || STACK_OFFSET)}></Card>)
            
            })}
      </div>
    )
  }
}

export default LongStack
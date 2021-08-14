import React, { Component } from "react";
import Card from "./card"

const STACK_OFFSET = 15
class LongStack extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="stack" style={{position: this.props.dragging ? "absolute" : "relative"}}>
        {this.props.cards.map((card, index) => <Card 
              key={card.id}
              id={card.id}
              open={card.open}
              onMouseDown={(e) => this.props.onMouseDown(e, card.id)}
              z={index}
              y={index * (this.props.stackOffset || STACK_OFFSET)}></Card>)}
      </div>
    )
  }
}

export default LongStack
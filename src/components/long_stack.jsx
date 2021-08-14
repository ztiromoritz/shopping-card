import React, { Component } from "react";
import Card from "./card"

const STACK_OFFSET = 15
class LongStack extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(
      <div className="stack">
        {this.props.cards.map((card, index) => <Card key={card.id} id={card.id} open={card.open} z={index} y={index * STACK_OFFSET}></Card>)}
      </div>
    )
  }
}

export default LongStack
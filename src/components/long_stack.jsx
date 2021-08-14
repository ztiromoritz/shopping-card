import React, { Component } from "react";
import Card from "./card"
class LongStack extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(
      <div className="stack">
        {this.props.cards.map((card, index) => <Card key={card.id} id={card.id} open={card.open} z={index}></Card>)}
      </div>
    )
  }
}

export default LongStack
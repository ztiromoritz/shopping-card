import React, { Component, useState } from 'react'
import './App.css'
import LongStack from './components/long_stack'
import DropArea from './components/drop_area'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      dragging: false,
      ghostStack: [],
    }
  }
  splitStackAt(stack, card){
    console.log("splitting stack at", card)
    this.state = {
      dragging: true,
      ghostStack: stack
    }
  }
  render(){
    return (
      <div className="App">
       
          <div id="pool">
            <div id="deck">
              <DropArea type="blank"></DropArea>
              <LongStack cards={this.props.G.deck.map(id=>({id, open: false}))} stackOffset={0.25} ></LongStack>
            </div>
            <div id="hand">
              <DropArea type="blank"></DropArea>
            </div> 
          </div>
  
          <div id="stacks">
            {this.props.G.stacks
              .map(stack =>{
                const {open,close}= stack;
                const closedCards = close.map(id=>({id, open: false}));
                const openCards = open.map(id => ({id, open: true}));
                return [...closedCards, ...openCards]
              })
              .map(cards=>{console.log(cards); return cards})
              .map(cards=><LongStack cards={cards} onClick={(card) => this.splitStackAt(cards, card)}></LongStack>)}
          </div>
  
          <div id="slots">
            <DropArea type="hearts"></DropArea>
            <DropArea type="clubs"></DropArea>
            <DropArea type="diamonds"></DropArea>
            <DropArea type="spades"></DropArea>
          </div>
          {this.state.dragging ? 
            <LongStack cards={this.state.ghostStack} dragging={this.state.dragging}></LongStack>
            : null
          }
          
      </div>
    )
  }
}

export default App

import React, { Component, useDebugValue, useState } from 'react'
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
  splitStackAt(event, stack, card){

    if(this.state.dragging){
      return
    }
    const index = stack.findIndex(stackCard => stackCard.id === card)
    const newStack = stack.slice(index, stack.length)

    const ghostStack = {
      stack: newStack,
      posX: event.clientX,
      posY: event.clientY
    }
    this.setState({
      dragging: true,
      ghostStack
    })
    document.onmouseup = this.closeDrag.bind(this)
    document.onmousemove = this.dragStack.bind(this)
  }
  closeDrag(event){
    this.setState({
      dragging: false,
      ghostStack: {}
    })
    document.onmouseup = null
    document.onmousemove = null
  }
  dragStack(event){

    const ghostStack = {
      stack: this.state.ghostStack.stack,
      posX: event.clientX,
      posY: event.clientY
    }
    this.setState({
      ghostStack
    })
  }
  

  clickDeck(){
    this.props.moves.clickDeck();
  }
  render(){
    return (
      <div className="App">
       
          <div id="pool">
            <div id="deck" onClick={()=>this.clickDeck()}>
              <DropArea type="blank"></DropArea>
              <LongStack cards={this.props.G.deck.map(id=>({id, open: false}))} stackOffset={0.25} ></LongStack>
            </div>
            <div id="hand">
              <DropArea type="blank"></DropArea>
              <LongStack cards={this.props.G.hand.map(id=>({id, open: true}))} stackOffset={10}></LongStack>
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
              .map(cards=><LongStack 
                cards={cards} 
                onMouseDown={(event, card) => this.splitStackAt(event, cards, card)}
                hideCards={this.state.ghostStack.stack}></LongStack>)}
          </div>
  
          <div id="slots">
            <DropArea type="hearts"></DropArea>
            <DropArea type="clubs"></DropArea>
            <DropArea type="diamonds"></DropArea>
            <DropArea type="spades"></DropArea>
          </div>
          {this.state.dragging ? 
            <LongStack 
              cards={this.state.ghostStack.stack} 
              dragging={this.state.dragging} 
              posX={this.state.ghostStack.posX}
              posY={this.state.ghostStack.posY}
              ></LongStack>
            : null
          }
          
      </div>
    )
  }
}

export default App

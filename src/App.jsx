import React, { useState } from 'react'
import './App.css'
import Card from './components/card'
import DropArea from './components/drop_area'
import LongStack from './components/long_stack'


function App({G, ctx}) {
  return (
    <div className="App">
     
        <div id="hand">
          <DropArea type="blank"></DropArea>
         
        </div>

        <div id="stacks">
          {G.stacks
            .map(stack =>{
              const {open,close}= stack;
              const closedCards = close.map(id=>({id, open: false}));
              const openCards = open.map(id => ({id, open: true}));
              return [...closedCards, ...openCards]
            })
            .map(cards=>{console.log(cards); return cards})
            .map((cards, index)=><LongStack key={index} cards={cards}></LongStack>)}
        </div>

        <div id="slots">
          <DropArea type="hearts"></DropArea>
          <DropArea type="clubs"></DropArea>
          <DropArea type="diamonds"></DropArea>
          <DropArea type="spades"></DropArea>
        </div>

        
    </div>
  )
}

export default App

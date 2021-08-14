import React, { useState } from 'react'
import './App.css'
import Card from './components/card'


function App({G, ctx}) {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hand</h4>
        {G.hand[0]}
        <p>Shopping Card</p>
          <Card id="h10" open={false}></Card>
      </header>
    </div>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Client } from 'boardgame.io/react';
import { ShoppingCard } from './Game';

const ClientApp = Client({
  game: ShoppingCard,
  board: App 
});

ReactDOM.render(
  <React.StrictMode>
    <ClientApp />
  </React.StrictMode>,
  document.getElementById('root')
)

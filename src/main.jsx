import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Client } from 'boardgame.io/client';
import { ShoppingCard } from './Game';

class TicTacToeClient {
  constructor() {
    this.client = Client({ game: ShoppingCard });
    this.client.start();
  }
}

const app = new TicTacToeClient();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

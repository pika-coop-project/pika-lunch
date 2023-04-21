import React from 'react';
import pika from './asset/img/pikachu.svg';
import './App.css';
import LunchHistory from './component/LunchHistory';
import LunchOptions from './component/LunchOptions';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <div className="title">
          <header className="PIKA-header">PIKA</header>
          <header>Lunch Navigator</header>
        </div>
        
        <img src={pika} className="App-logo" alt="pikachu" />
      </div>
      
      <div className="listing-cards">
        <LunchHistory />
        <LunchOptions />
      </div>
      
        
    </div>
  );
}

export default App;

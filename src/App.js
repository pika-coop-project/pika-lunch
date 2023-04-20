import React from 'react';
import logo from './asset/img/logo.svg';
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
        
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      <div className="listing-cards">
        <LunchOptions />
        <LunchHistory />
      </div>
      
        
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './asset/img/logo.svg';
import './App.css';
import LunchHistory from './component/LunchHistory';
import LunchOptions from './component/LunchOptions';

function App() {
  const [update, setUpdate] = useState(0);
  const increment = () => {setUpdate(u => u + 1)};

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
        <LunchHistory increment={increment} />
        <LunchOptions increment={increment} />
      </div>
      
        
    </div>
  );
}

export default App;

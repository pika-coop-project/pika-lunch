import React, { useReducer } from 'react';
import logo from './asset/img/logo.svg';
import './App.css';
import LunchHistory from './component/LunchHistory';
import LunchOptions from './component/LunchOptions';

function App() {
  // eslint-disable-next-line
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function increment() {
    forceUpdate();
  }

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

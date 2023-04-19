import React, { useState } from 'react';
import logo from './asset/img/logo.svg';
import './App.css';
import LunchHistory from './component/LunchHistory';
import LunchOptions from './component/LunchOptions';

export const ListingContext = React.createContext();

function App() {
  // eslint-disable-next-line
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("count", count);
    setCount(prev => prev+1);
  };

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
        <ListingContext.Provider value={increment}>
          <LunchHistory />
          <LunchOptions />
        </ListingContext.Provider>
      </div>
      
        
    </div>
  );
}

export default App;

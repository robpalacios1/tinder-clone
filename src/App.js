import React from 'react'
import './App.css';

/***** Components *****/
import Header from './components/Header'
import TinderCards from './components/TinderCards'


function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      {/** SwipeButtons */}
    </div>
  );
}

export default App;

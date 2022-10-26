import './App.css';
import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Meme />
      </div>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi';
import Giphylist from './components/Giphylist';
import RandomGip from './components/RandomGip';
require('dotenv').config()


function App() {

  return (
<div className="App"> 
<Navi/>
<Giphylist/>
</div>
  );
}

export default App;

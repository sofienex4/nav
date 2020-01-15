import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'

function App() {
  const table = ["home" , 'service' , 'contact']
  return (
    <div className="App">
      <Navbar menuItems={table}/>
    </div>
  );
}

export default App;

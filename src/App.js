import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonZ from './components/buttonz';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First Website Gang Gang
        </p>
        <p>
          Let'z begin
        </p>
        <ButtonZ/>
      </header>
      
    </div>
  );
}

export default App;

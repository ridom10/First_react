import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First Website Gang Gang
        </p>
	  <NameForm/>
        <a
        >
          Let'z begin
        </a>
      </header>
    </div>
  );
}

export default App;

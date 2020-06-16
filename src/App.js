import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm.js'
import ButtonZ from './components/buttonz';
import NavBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First Website Gang Gang
        </p>
        
	     <NameForm/>
        <p>
          Let'z begin
        </p>
        <ButtonZ/>
      </header>
    </div>
  );
}

export default App;

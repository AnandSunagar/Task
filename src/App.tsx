import React from 'react';
import './App.css';
import ChildComponent from './Components/ChildComponent';
import ParentComponent from './Components/ParentComponent';

function Apps() {
  return (
    <div className="App">
      <ParentComponent/>
      <br/>
      <br/>
   
    <ChildComponent/>
    
    </div>
  );
}

export default Apps;

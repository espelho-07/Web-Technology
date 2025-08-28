import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import A from './A.js';


function App() {
  const [name, setName] = useState("Default Name");

  return (
    <div>
      <h1>A</h1>
      <A name={name} setName={setName} />
    </div>
  );
}

export default App;

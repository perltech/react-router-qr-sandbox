import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { Link, Outlet } from "react-router-dom";

var QRCode = require('qrcode.react');

function App() {
  const [phrase, setPhrase] = useState("");
  let secretPhrase = "Happy";
  let hasQRCode = false;

  // const handleInput = () => {
  //   if (phrase == secretPhrase) {
  //     return hasQRCode = true;
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code</h1>
        {/* <QRCode value="http://www.perltech-simulations.com" /> */}
        <h2>
          Happy
          <br />
          <input placeholder={"What is the secret phrase?"} onChange={e => setPhrase(e.target.value)}/>
          {/* <button onClick={() => handleInput()}>Submit</button> */}
          <br />
          {/* Displays ONLY the QR code without creating an active link, that connects to the route from index.js */}
            {/* <Link to="/happy"> */}
            {/* if (hasQRCode) {
              <QRCode value="http://localhost:3001/happy"/>
            } */}
            {phrase === secretPhrase ? <QRCode value="http://localhost:3001/happy"/> : ""}
            {/* </Link> */}
        </h2>
        <h2>
          Sad
          <br />
          <br />

          <Link to="/sad"><QRCode value="http://localhost:3001/sad" /></Link>
        </h2>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

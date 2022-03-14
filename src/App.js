import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { Link, Outlet } from "react-router-dom";

var QRCode = require('qrcode.react');

function App() {
  const [phrase, setPhrase] = useState("");
  let secretPhrase = "Happy";

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
            <br />
            <br />

            {phrase === secretPhrase ? <QRCode value={window.location.origin + "/happy"}/> : ""}
            {/* </Link> */}
        </h2>
        <h2>
          Sad
          <br />
          <br />

          <Link to="/sad"><QRCode value={window.location.origin + "/sad"} /></Link>
        </h2>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

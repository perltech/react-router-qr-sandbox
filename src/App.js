import logo from './logo.svg';
import './App.css';

import { Link, Outlet } from "react-router-dom";

var QRCode = require('qrcode.react');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code</h1>
        {/* <QRCode value="http://www.perltech-simulations.com" /> */}
        <h2>
          Happy
          <br />
          <br />
          {/* Displays ONLY the QR code without creating an active link, that connects to the route from index.js */}
            {/* <Link to="/happy"> */}
              <QRCode value="http://localhost:3001/happy"/>
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

import React from 'react';
import logo from '../assets/logo.png';

function LogoComponent() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '5%' }}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default LogoComponent;

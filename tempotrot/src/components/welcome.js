import React from 'react';
import LogoComponent from './logo';

function WelcomeComponent() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '5%' }}>
      <LogoComponent />
      <p>Welcome to TempoTrot!</p>
    </div>
  );
}

export default WelcomeComponent;

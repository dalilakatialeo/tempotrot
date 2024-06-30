import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchPage from './pages/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to TempoTrot!</p>
        <SearchPage></SearchPage>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import WelcomeComponent from './components/welcome.js';
import SearchPage from './pages/SearchPage';
import BPMResultsPage from './pages/BPMResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WelcomeComponent />
                  <SearchPage />
                </>
              }
              exact
            />
            <Route path="/bpm-results" element={<BPMResultsPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

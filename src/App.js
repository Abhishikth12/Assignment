import React from 'react';
import Dashboard from './components/Dashboard';
import RightSide from './components/RightSide';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <div className="sidebar">
          {/* Left Sidebar (Dashboard component) */}
          <Dashboard />
        </div>
        <div className="right-side">
          {/* Right Side (Sections) */}
          <RightSide />
        </div>
      </div>
    </div>
  );
}


export default App;

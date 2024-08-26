import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
// Import other components as needed

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

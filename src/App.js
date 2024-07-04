import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename='/games'>
      <Routes>
        <Route path="/games" element={<Home />} />
      </Routes>
    </Router>
  );
} 


export default App;

import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from './register/Register';
import { Home } from './home/Home';
import { Landing } from './landing/Landing';
import { GameScreen } from './screens/GameScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router> 
  );
}

export default App;

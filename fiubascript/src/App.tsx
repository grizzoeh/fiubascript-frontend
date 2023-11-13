import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './screens/login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from './screens/register/Register';
import { Home } from './screens/home/Home';
import { Landing } from './screens/landing/Landing';
import { GameScreen } from './screens/game/GameScreen';

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

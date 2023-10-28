import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from './register/Register';
import { Home } from './home/Home';
import { Landing } from './landing/Landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
    
  );
}

export default App;

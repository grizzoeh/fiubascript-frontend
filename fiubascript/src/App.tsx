import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './screens/login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from './screens/register/Register';
import { Home } from './screens/home/Home';
import { Landing } from './screens/landing/Landing';
import { GameScreen } from './screens/game/GameScreen';
import useUser from './hooks/useUser';

function App() {
  const { userInfo } = useUser();
  return (
    <Router>
      <Routes>
        {
          userInfo.token
          ?
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/*" element={<>Page not found :(</>} />
          </>
          :
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<>Page not found :(</>} />
          </>

        }
      </Routes>
    </Router> 
  );
}

export default App;

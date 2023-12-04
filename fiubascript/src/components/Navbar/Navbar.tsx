// Navbar.tsx
import React, { useState } from 'react';
import triviaTitle from '../../assets/TrivIA.png';
import { UserLogo } from '../UserLogo/UserLogo';
import Coin from '../../assets/coin.png';
import './Navbar.css';
import { ComboBox } from '../ComboBox/ComboBox';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const { userInfo } = useUser();
  const [showComboBox, setShowComboBox] = useState(false);

  const handleUserLogoClick = () => {
    setShowComboBox((prev) => !prev);
  };

  const handleOnClickTrivia = () => {
    navigate('/home'); 
  };

  const handleComboBoxSelect = (value: string) => {
    if (value === 'Perfil') {
     navigate('/profile'); 
    } else if (value === 'Cerrar Sesión') {
      console.log('Cerrar Sesión');
    }

    setShowComboBox(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-item">
          <img src={triviaTitle} alt="TrivIA Title" className="nav-logo" onClick={handleOnClickTrivia}/>
        </div>
        <div className="nav-item">
          <img src={Coin} alt="Coin" className="nav-icon" />
          <p className="number">{userInfo.coins || 0}</p>
        </div>
        <div className="nav-item">
          <UserLogo onClick={handleUserLogoClick} />
          {showComboBox && (
            <ComboBox options={['Perfil', 'Cerrar Sesión']} onSelect={handleComboBoxSelect} />
          )}
        </div>
      </nav>
    </>
  );
};

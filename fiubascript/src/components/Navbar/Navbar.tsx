// Navbar.tsx
import React, { useState } from 'react';
import triviaTitle from '../../assets/TrivIA.png';
import { UserLogo } from '../UserLogo/UserLogo';
import Coin from '../../assets/coin.png';
import './Navbar.css';
import { ComboBox } from '../ComboBox/ComboBox';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../assets/BackArrow.png';

interface NavbarProps {
  hasBackButton?: boolean;
}

export const Navbar = ({hasBackButton}: NavbarProps) => {
  const navigate = useNavigate();
  const { userInfo,setUserInfo } = useUser();
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
      userInfo.id && setUserInfo({
        token: null,
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        coins: null,
        characters: null,
        currentCharacter: null
      });
      navigate('/login');
    }

    setShowComboBox(false);
  };

  const onBack = () => {
    navigate('/home');
  }

  return (
    <>
      <nav className="navbar">
        {hasBackButton && (
      <div className='navbar-item'>
        <img className='gameHeader-arrow' src={BackArrow} alt={'back'} onClick={onBack}/>
        <img className='gameHeader-logo' src={triviaTitle} alt={'title'} />
      </div>
    )}
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

import React, { useState, useRef, useEffect } from 'react';
import UserPhoto from '../../assets/UserPhoto.png';
import './UserLogo.css';


export const UserLogo = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOautside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOautside);
    return () => {
      document.removeEventListener('mousedown', handleClickOautside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="user-logo-container">
      <img
        src={UserPhoto}
        alt="userImage"
        className="user-image"
        onClick={toggleDropdown}
      />
      {isDropdownVisible && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <p>Configuración</p>
          <p>Cerrar sesión</p>
        </div>
      )}
    </div>
  );
};

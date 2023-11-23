import React, { useState, useRef, useEffect } from 'react';
import UserPhoto from '../../assets/UserPhoto.png';
import './UserLogo.css';


export const UserLogo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Añade el tipo explícito HTMLDivElement | null

  const handleUserClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string) => {
    // ... (mismo código)
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-logo-container">
      <img
        src={UserPhoto}
        alt="userImage"
        className="user-image"
        onClick={handleUserClick}
      />
    </div>
  );
};

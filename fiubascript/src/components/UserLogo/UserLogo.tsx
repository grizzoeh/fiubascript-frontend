import React from 'react';
import UserPhoto from '../../assets/UserPhoto.png';
import './UserLogo.css';

type UserLogoProps = {
  onClick: () => void; 
};

export const UserLogo: React.FC<UserLogoProps> = ({ onClick }) => {
  return (
    <div className="user-logo-container" onClick={onClick}>
      <img src={UserPhoto} alt="userImage" className="user-image" />
    </div>
  );
};

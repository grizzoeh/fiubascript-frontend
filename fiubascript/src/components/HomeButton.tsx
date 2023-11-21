import React, { ReactElement } from 'react'
import { ReactNode } from 'react';
import { COLORS } from '../constants/constants';
import './HomeButton.css';
import { useNavigate } from 'react-router-dom';


type HomeButtonProps = {
  title: string; // Título del botón
  imageSrc: string; // Ruta de la imagen
  onClick: () => void;
};

export const HomeButton = ({ title, imageSrc, onClick}: HomeButtonProps) => {
  return (
    <div className="home-button" onClick={onClick}>
      <p className="home-button-title">{title}</p>
      <img src={imageSrc} alt={title} />
    </div>
  );
};
import React, { ReactElement } from 'react'
import { ReactNode } from 'react';
import { COLORS } from '../../constants/constants';
import './HomeButton.css';

type HomeButtonProps = {
  title: string; // Título del botón
  imageSrc: string; // Ruta de la imagen
  onClick?: () => void; // Función a ejecutar al hacer click 
  //children: ReactElement;
};

export const HomeButton = ({ title, imageSrc, onClick}: HomeButtonProps) => {
  return (
    <button className="home-button" onClick={onClick}>
      <p className="home-button-title">{title}</p>
      <img src={imageSrc} alt={title} />
    </button>
  );
};
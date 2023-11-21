import React, { ReactElement } from 'react'
import { ReactNode } from 'react';
import './HomeButton.css';

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
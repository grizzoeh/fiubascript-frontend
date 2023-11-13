import React, { ReactElement } from 'react'
import { ReactNode } from 'react';
import { COLORS } from '../../constants/constants';
import './HomeButton.css';

type HomeButtonProps = {
  title: string; // Título del botón
  imageSrc: string; // Ruta de la imagen
  //children: ReactElement;
};

export const HomeButton = ({ title, imageSrc}: HomeButtonProps) => {
  return (
    <div className="home-button">
      <p className="home-button-title">{title}</p>
      <img src={imageSrc} alt={title} />
    </div>
  );
};
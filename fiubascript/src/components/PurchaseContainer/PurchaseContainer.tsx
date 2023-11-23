import React from 'react';
import './PurchaseContainer.css';
import Cruz from '../../assets/Cruz.png';
import Coin from '../../assets/coin.png';


type PurchaseContainerProps = {
  randomNumber: number;
  imageSrc: string;
  onClose: () => void; // Agrega la función onClose
};

export const PurchaseContainer = ({ randomNumber, imageSrc, onClose }: PurchaseContainerProps) => {
  return (
    <div>
        <button className="close-button" onClick={onClose}>
        <img src={Cruz} alt="close" className="close-button" />
      </button>
    <div className="container-block">
        <p className="title-purchase">¿Desea comprar el siguiente avatar?</p>
      <img className="skins-purchase" src={imageSrc} alt="Skin" />
      <div className="grid-container">
        <img src={Coin} alt="Coin" className="coin" />
        <p className="number">{randomNumber}</p>
        </div>
        <div className="grid-container">
        <button className="aceptar" onClick={onClose}>Aceptar</button>
        <button className="cancelar" onClick={onClose}>Cancelar</button>
        </div>
    </div>
    </div>
  );
};
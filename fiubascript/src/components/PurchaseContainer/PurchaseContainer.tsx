import React, { useState }  from 'react';
import './PurchaseContainer.css';
import Cruz from '../../assets/Cruz.png';
import Coin from '../../assets/coin.png';
import { buyCharacter } from '../../services/charactersService';
import useUser from '../../hooks/useUser';
import { CustomPurchaseModal } from '../CustomModal/CustomPurchaseModal';


type PurchaseContainerProps = {
  randomNumber: number;
  imageSrc: string;
  onClose: () => void; 
  characterId: number;
};

export const PurchaseContainer = ({ randomNumber, imageSrc, onClose, characterId }: PurchaseContainerProps) => {
  const {userInfo, setUserInfo} = useUser();

  const handleAceptarCompra = () => {
      userInfo.id && buyCharacter(characterId, randomNumber,userInfo.id).then(updatedCoins => {
        setUserInfo({
          ...userInfo,
          coins: updatedCoins
        })
      });
      onClose();
        
  }
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
        <button className="aceptar" onClick={handleAceptarCompra}>Aceptar</button>
        <button className="cancelar" onClick={onClose}>Cancelar</button>
        </div>
    </div>
    <div>
    </div>
    </div>
  );
};
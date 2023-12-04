import React, { useState }  from 'react';
import './PurchaseContainer.css';
import Cruz from '../../assets/Cruz.png';
import Coin from '../../assets/coin.png';
import { reduceCoins } from '../../services/coinService';
import useUser from '../../hooks/useUser';
import { CustomPurchaseModal } from '../CustomModal/CustomPurchaseModal';


type PurchaseContainerProps = {
  randomNumber: number;
  imageSrc: string;
  onClose: () => void; 
};

export const PurchaseContainer = ({ randomNumber, imageSrc, onClose }: PurchaseContainerProps) => {
  const {userInfo, setUserInfo} = useUser();
  const [showModal, setShowModal] = useState(false);

  const handleAceptarCompra = () => {
    if(userInfo.coins != null){
      if(userInfo.coins > randomNumber){
        userInfo.id && reduceCoins(userInfo.id, randomNumber).then(updatedCoins => {
          setUserInfo({
            ...userInfo,
            coins: updatedCoins
          })
        });
      } else {
        setShowModal(true);
      }
    }
    
    
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
      {showModal && <CustomPurchaseModal onClose={() => setShowModal(false)} />}
    </div>
    </div>
  );
};
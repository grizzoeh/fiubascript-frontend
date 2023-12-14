import React, { useState,useEffect }  from 'react';
import './PurchaseContainer.css';
import Cruz from '../../assets/Cruz.png';
import Coin from '../../assets/coin.png';
import { buyCharacter,updateCharacters } from '../../services/charactersService';
import useUser from '../../hooks/useUser';
import { CustomPurchaseModal } from '../CustomModal/CustomPurchaseModal';
import { addCoins, reduceCoins } from '../../services/coinService'


type PurchaseContainerProps = {
  randomNumber: number;
  imageSrc: string;
  onClose: () => void; 
  characterId: number;
};

export const PurchaseContainer = ({ randomNumber, imageSrc, onClose, characterId }: PurchaseContainerProps) => {
  const {userInfo, setUserInfo} = useUser();
  const [isAcceptButtonDisabled, setIsAcceptButtonDisabled] = useState(false);

  useEffect(() => {
    setIsAcceptButtonDisabled(userInfo.coins !== null && userInfo.coins < randomNumber);
  }, [userInfo.coins, randomNumber]);

  const handleAceptarCompra = () => {
      userInfo.id && buyCharacter(characterId, randomNumber,userInfo.id).then(updatedCoins => {
        setUserInfo({
          ...userInfo,
          coins: updatedCoins,
        })
      });
      userInfo.id && updateCharacters(userInfo.id,characterId).then(updateCharacters => {
        setUserInfo({
            ...userInfo,
            currentCharacter: updateCharacters,
            characters: userInfo.characters !== null
            ? userInfo.characters.concat(updateCharacters)
            : [updateCharacters] ,
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
        <button className="aceptar" onClick={handleAceptarCompra} disabled={isAcceptButtonDisabled}>Aceptar</button>
        <button className="cancelar" onClick={onClose}>Cancelar</button>
        </div>
    </div>
    <div>
    </div>
    </div>
  );
};
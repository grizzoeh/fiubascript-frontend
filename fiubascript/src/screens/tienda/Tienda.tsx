import React, { useState } from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Navbar } from '../../components/Navbar/Navbar'
import { PurchaseContainer } from '../../components/PurchaseContainer/PurchaseContainer'
import Coin from '../../assets/coin.png';
import './Tienda.css';


const importImages = () => {
    const images = require.context('../../assets/skins', false, /\.(png|jpe?g|svg)$/);
    return images.keys().map(images) as string[]; // Realiza una conversión de tipo a string[]
  };

  const generateRandomNumbers = (count: number) => {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      randomNumbers.push(Math.floor(Math.random() * 100) + 1); // Cambia 100 al rango que desees
    }
    return randomNumbers;
  };

  export const Tienda = () => {
    const imagePaths = importImages();
    const randomNumbers = generateRandomNumbers(imagePaths.length);

    const [showPurchaseContainer, setShowPurchaseContainer] = useState(false);
    const [selectedSkin, setSelectedSkin] = useState({
      imagePath: '',
      randomNumber: 0,
    });
  
    const handleSkinClick = (imagePath: string, randomNumber: number) => {
      setSelectedSkin({ imagePath, randomNumber });
      setShowPurchaseContainer(true);
    };

    const handleClose = () => {
      setShowPurchaseContainer(false);
    };
    
    return (
      <BackgroundContainer>
        <Navbar></Navbar>
        <div className="image-gallery-container">
          <div className="title-container">
            <p className="title">Tienda</p>
          </div>
          {imagePaths.map((imagePath, index) => (
            <div key={index} className="image-with-coin">
              <img src={imagePaths[index]} alt={`skin`} className="skins" onClick={() => handleSkinClick(imagePath, randomNumbers[index])} />
              <div className="coin-and-number">
              <img src={Coin} alt="Coin" className="coin" />
              <p className="random-number">{randomNumbers[index]}</p>
            </div>
            </div>
          ))}
          {showPurchaseContainer && (
        <PurchaseContainer
          randomNumber={selectedSkin.randomNumber} // Proporciona el valor adecuado
          imageSrc={selectedSkin.imagePath}
          onClose={handleClose}
        />
      )}
        </div>
      </BackgroundContainer>
    );
  }
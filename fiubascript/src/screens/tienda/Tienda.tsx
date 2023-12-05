import React, { useState } from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { PurchaseContainer } from '../../components/PurchaseContainer/PurchaseContainer'
import Coin from '../../assets/coin.png';
import './Tienda.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { CHARACTER_PRICES } from '../../constants/prices'


const importImages = () => {
  const images = require.context('../../assets/skins', false, /\.(png|jpe?g|svg)$/);
  const imagePaths: string[] = images.keys().map(images) as string[];

  return { imagePaths };
};

  export const Tienda = () => {
    const { imagePaths } = importImages();
    const [showPurchaseContainer, setShowPurchaseContainer] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState({
    characterId: 0,
    randomNumber: 0,
  });

  const handleSkinClick = (characterId: number) => {
    const randomNumber = CHARACTER_PRICES[characterId];
    setSelectedSkin({ characterId, randomNumber });
    setShowPurchaseContainer(true);
  };

  const handleClose = () => {
    setShowPurchaseContainer(false);
  };

  return (
    <BackgroundContainer>
      <Navbar hasBackButton={true} />
      <div className="image-gallery-container">
        <div className="title-container">
          <p className="title">Tienda</p>
        </div>
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="image-with-coin">
            <img
              src={imagePath}
              alt={`skin`}
              className="skins"
              onClick={() => handleSkinClick(index)}
            />
            <div className="coin-and-number">
              <img src={Coin} alt="Coin" className="coin" />
              <p className="random-number">{CHARACTER_PRICES[index]}</p>
            </div>
          </div>
        ))}
        {showPurchaseContainer && (
          <PurchaseContainer
            randomNumber={selectedSkin.randomNumber}
            imageSrc={imagePaths[selectedSkin.characterId]}
            onClose={handleClose}
          />
        )}
      </div>
    </BackgroundContainer>
  );
};
import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import triviaTitle from '../../assets/TrivIA.png';
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
  
    return(
        <BackgroundContainer>
        <img src={triviaTitle} alt="TrivIA Title" className="title" />
        <div className="image-gallery-container">
        <p className="tienda-title">Tienda</p>
        {imagePaths.map((imagePath, index) => (
          <div key={index} className="image-with-coin">
            <img src={imagePaths[index]} alt={`skin`} className="skins" />
            <img src={Coin} alt="Coin" className="coin" />
            <p className="random-number">{randomNumbers[index]}</p>
          </div>
        ))}
      </div>
        </BackgroundContainer>
    )
}
import React from 'react'
import { BackgroundContainer } from '../components/BackgroundContainer'
import { HomeButton } from '../components/HomeButton'
import triviaTitle from '../assets/TrivIA.png';
import Jugar from '../assets/Jugar.png';
import Tienda from '../assets/Tienda.png';
import './Home.css';

export const Home = () => {
    return(
        <BackgroundContainer>
        <div className="centered-image">
        <img src={triviaTitle} alt="TrivIA Title" />
        </div>
        <div className="centered-content">
        <div className="button-row">
        <HomeButton title="Jugar" imageSrc={Jugar}></HomeButton>
        <HomeButton title="Tienda" imageSrc={Tienda}></HomeButton>
        </div>
        </div>
        </BackgroundContainer>
    )
}
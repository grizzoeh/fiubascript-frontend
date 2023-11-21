import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { UserLogo } from '../../components/UserLogo/UserLogo'
import { HomeButton } from '../../components/HomeButton/HomeButton'
import triviaTitle from '../../assets/TrivIA.png';
import Jugar from '../../assets/Jugar.png';
import Tienda from '../../assets/Tienda.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';



export const Home = () => {
    const navigate = useNavigate();
    const handleButtonJugarClick = () => {
        navigate('/game'); 
      };
    
      const handleButtonTiendaClick = () => {
        navigate('/tienda'); 
      };
    
  
    return(
        <BackgroundContainer>
        <UserLogo></UserLogo>
        <div className="centered-image">
        <img src={triviaTitle} alt="TrivIA Title" className="title-trivia" />
        </div>
        <div className="centered-content">
        <div className="button-row">
        <HomeButton title="Jugar" imageSrc={Jugar}  onClick={handleButtonJugarClick}></HomeButton>
        <HomeButton title="Tienda" imageSrc={Tienda} onClick={handleButtonTiendaClick}></HomeButton>
        </div>
        </div>
        </BackgroundContainer>
    )
}
import React from 'react'
import { BackgroundContainer } from '../components/BackgroundContainer'
import { UserLogo } from '../components/UserLogo'
import { HomeButton } from '../components/HomeButton'
import triviaTitle from '../assets/TrivIA.png';
import Jugar from '../assets/Jugar.png';
import Tienda from '../assets/Tienda.png';
import UserPhoto from '../assets/UserPhoto.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate = useNavigate();
    const handleButtonJugarClick = () => {
        navigate('/login'); // Reemplaza '/ruta-jugar' con la ruta que desees
      };
    
      const handleButtonTiendaClick = () => {
        navigate('/tienda'); // Reemplaza '/ruta-tienda' con la ruta que desees
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
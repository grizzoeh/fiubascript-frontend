import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { HomeButton } from '../../components/HomeButton/HomeButton'
import { UserNotLoggedInPage } from "../../auth/UserNotLoggedInPage";
import { isUserLoggedIn } from "../../auth/authFunctions"
import { Navbar } from "../../components/navbar/Navbar";
import triviaTitle from '../../assets/TrivIA.png';
import Jugar from '../../assets/Jugar.png';
import Tienda from '../../assets/Tienda.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return(

        //<Navbar/>
        <BackgroundContainer>
          <div className="centered-image">
            <img src={triviaTitle} alt="TrivIA Title" />
          </div>
          <div className="centered-content">
            <div className="button-row">
              <HomeButton title="Jugar" imageSrc={Jugar} onClick={() => navigate('/game')}></HomeButton>
              <HomeButton title="Tienda" imageSrc={Tienda}></HomeButton>
            </div>
          </div>
        </BackgroundContainer>
    )
}
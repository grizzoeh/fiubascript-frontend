import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { HomeButton } from '../../components/HomeButton/HomeButton'
import triviaTitle from '../../assets/TrivIA.png';
import Ingresar from '../../assets/Ingresar.png';
import Registrarse from '../../assets/Registrarse.png';
import '../home/Home.css';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate();

    return(

        //<Navbar/>
        <BackgroundContainer>
          <div className="centered-image">
            <img src={triviaTitle} alt="TrivIA Title" />
          </div>
          <div className="centered-content">
            <div className="button-row">
              <HomeButton title="Ingresar" imageSrc={Ingresar} onClick={() => navigate('/login')}></HomeButton>
              <HomeButton title="Registrarse" imageSrc={Registrarse} onClick={() => navigate('/register')}></HomeButton>
            </div>
          </div>
        </BackgroundContainer>
    )
}
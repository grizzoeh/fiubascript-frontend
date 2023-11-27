import React, { useEffect, useState } from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { UserLogo } from '../../components/UserLogo/UserLogo'
import { HomeButton } from '../../components/HomeButton/HomeButton'
import triviaTitle from '../../assets/TrivIA.png';
import Jugar from '../../assets/Jugar.png';
import Tienda from '../../assets/Tienda.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Coin from '../../assets/coin.png';



export const Home = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const handleButtonJugarClick = () => {
        navigate('/game'); 
      };
    
      const handleButtonTiendaClick = () => {
        navigate('/tienda'); 
      };

      useEffect(() => {
        const lastPopupTime = parseInt(
          document.cookie
            .split('; ')
            .find((row) => row.startsWith('lastPopupTime'))
            ?.split('=')[1] || '0',
          10
        );
    
        const currentTime = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;
    
        if (!lastPopupTime || currentTime - lastPopupTime >= twentyFourHours) {
          setShowPopup(true);
    
          // Guardar la información en la cookie
          document.cookie = `lastPopupTime=${currentTime}; max-age=${twentyFourHours / 1000}`;
        }
      }, []);
    
      const handlePopupClose = () => {
        setShowPopup(false);
      };

      const randomCoinNumber = Math.floor(Math.random() * 10) * 10 + 10;
    
  
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
        <Modal show={showPopup} onHide={handlePopupClose} animation={true} centered size='lg'>
        <Modal.Header closeButton className='bg-primary-light text-white border-0 justify-content-center'>
          <Modal.Title>Premio Diario!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center mt-2 mb-5'>
            Felicidades! Has ganado {randomCoinNumber} monedas como premio diario!
          </div>
          <div className='d-flex justify-content-center mt-2 mb-4 align-items-center'>
            <span className="mx-2">
              <img src={Coin} alt="Coin" className="coin" />
      
            </span>
            <span className="text-bold text-sm">{randomCoinNumber}</span> 
          </div>
        </Modal.Body>

          <div className='d-flex justify-content-center mg-2 mb-4'>
          <Button variant="primary" onClick={handlePopupClose} className='mx-auto bg-primary-light' size='lg'  >
            OBTENER
          </Button>
          </div>
      </Modal>
        </BackgroundContainer>
    )
}
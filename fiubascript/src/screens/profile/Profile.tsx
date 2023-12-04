import './Profile.css'
import Cruz from '../../assets/Cruz.png';
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Navbar } from '../../components/Navbar/Navbar';
import useUser from '../../hooks/useUser';
import Coin from '../../assets/coin.png';
import { Avatar } from '../../components/Avatar/Avatar'

export const Profile = () => {
    const { userInfo } = useUser();
    return (
      <BackgroundContainer>
      <Navbar></Navbar>
      <div>
      <div className="container-profile">
        <div className="title-container">
            <p className="profile-title">Perfil</p>
        </div>
        <div className="grid-profile-container">
        <p className="profile-letters">Nombre</p>
        <p className="profile-letters">{userInfo.firstName || 0} {userInfo.lastName || 0}</p>
        <p className="profile-letters">Tus monedas</p>
        <div className="coin-and-number-profile">
              <img src={Coin} alt="Coin" className="coin" />
              <p className="number">{userInfo.coins || 0}</p>
        </div>
        <p className="profile-letters">Tu avatar</p>
        <div className="avatar-container">
              <img
                src={require(`../../assets/skins/image ${userInfo.currentCharacter || 0}.png`)}
                alt={`avatar`}
                className="avatar-image"
              />
              <p className="avatar-text-profile">Cambiar</p>
            </div>
        </div>
      </div>
      </div>
    </BackgroundContainer>
    );
  };
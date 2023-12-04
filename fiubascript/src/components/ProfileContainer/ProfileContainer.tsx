import './ProfileContainer.css'
import Cruz from '../../assets/Cruz.png';
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { Navbar } from '../../components/Navbar/Navbar';
type ProfileContainerProps = {
    onClose: () => void;
  };
  

export const ProfileContainer = ({onClose}: ProfileContainerProps) => {
    return (
      <BackgroundContainer>
      <div>
      <div className="container-profile">
      <button className="close-button" onClick={onClose}>
          <img src={Cruz} alt="close" className="close-button" />
        </button>
        <div className="title-container">
            <p className="profile-title">Perfil</p>
        </div>
        
      </div>
      </div>
    </BackgroundContainer>
    );
  };
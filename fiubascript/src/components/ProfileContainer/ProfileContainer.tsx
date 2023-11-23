import './ProfileContainer.css'
import Cruz from '../../assets/Cruz.png';

type ProfileContainerProps = {
    onClose: () => void; // Agrega la función onClose
  };
  

export const ProfileContainer = ({onClose}: ProfileContainerProps) => {
    return (
      <div>
      <div className="container-profile">
      <button className="close-button" onClick={onClose}>
          <img src={Cruz} alt="close" className="close-button" />
        </button>
        <div className="title-container">
            <p className="title">Perfil</p>
        </div>
        
      </div>
      </div>
    );
  };
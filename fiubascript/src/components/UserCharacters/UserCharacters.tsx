import React from 'react';
import useUser from '../../hooks/useUser';
import Cruz from '../../assets/Cruz.png';
import './UserCharacters.css';
import { updateCharacters } from '../../services/charactersService';


type UserCharactersProps = {
  onClose: () => void;
};

export const UserCharacters: React.FC<UserCharactersProps> = ({ onClose }) => {
    const { userInfo,setUserInfo } = useUser();

    const handleSkinClick = (characterId: number) => {
        userInfo.id && updateCharacters(userInfo.id,characterId).then(updateCharacters => {
            setUserInfo({
                ...userInfo,
                currentCharacter: updateCharacters
              })
          });
        onClose();
    };

  if (!userInfo || !userInfo.characters || userInfo.characters.length === 0) {
    return (
      <div>
        <button className="close-button" onClick={onClose}>
          <img src={Cruz} alt="close" className="close-button-profile" />
        </button>
        <div className="container-block">
          <p>Aún no has comprado ningún avatar.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className="close-button" onClick={onClose}>
        <img src={Cruz} alt="close" className="close-button" />
      </button>
      <div className="image-gallery-container-profile">
        {userInfo.characters.map((characterId) => (
          <img
            key={characterId}
            src={require(`../../assets/skins/image ${characterId}.png`)}
            alt={`character-${characterId}`}
            className='skins'
            onClick={() => handleSkinClick(characterId)}
          />
        ))}
      </div>
    </div>
  );
};

import React from 'react'
import './Avatar.css'

type AvatarProps = {
  currentAvatarIndex: number;
  isHome?: boolean;
}

export const Avatar = ({currentAvatarIndex, isHome} : AvatarProps) => {
  return (
    <div className={isHome ? 'avatar-home-container' : 'avatar-game-container'}>
      {isHome && <div className='avatar-text'>¡Hola! ¿Listo para jugar?</div>}
      <img src={require(`../../assets/skins/image ${currentAvatarIndex}.png`)} alt={`avatar`} className="avatar-image" />
    </div>
  )
}

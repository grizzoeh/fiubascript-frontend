import React from 'react'
import './GameHeader.css';
import triviaTitle from '../../assets/TrivIA.png';
import coin from '../../assets/coin.png';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { Text } from '../Text/Text';

interface GameHeaderProps {
  questionNumber: number;
  coins: number;
}

export const GameHeader = ({questionNumber, coins}: GameHeaderProps) => {
  return (
    <div className='gameHeader-container'>
      <img className='gameHeader-logo' src={triviaTitle} alt={'title'} />
      <Text text={`Pregunta ${questionNumber}/10`}/>
      <div className='gameHeader-coin-container'>
        <img className='gameHeader-coin' src={coin} alt={'title'} />
        <Text text={`${coins}`}/>
      </div>
      <CountdownTimer onFinish={() => {}}/>
    </div>
  )
}

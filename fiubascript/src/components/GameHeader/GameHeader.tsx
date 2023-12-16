import React from 'react'
import './GameHeader.css';
import triviaTitle from '../../assets/TrivIA.png';
import BackArrow from '../../assets/BackArrow.png';
import coin from '../../assets/coin.png';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { Text } from '../Text/Text';
import { useNavigate } from 'react-router-dom';

interface GameHeaderProps {
  questionNumber: number;
  onFinishAnswerTime: () => void;
  onFinishShowResultTime: () => void;
  onLeave: () => void;
  coins: number;
  addTime: number;
  selectedAnswer: string;
  gameOver: boolean;
}

export const GameHeader = ({questionNumber, onFinishAnswerTime, onFinishShowResultTime, onLeave, coins, addTime, selectedAnswer, gameOver}: GameHeaderProps) => {

  return (
    <div className='gameHeader-container'>
      <div>
        <img className='gameHeader-arrow' src={BackArrow} alt={'back'} onClick={onLeave}/>
      <img className='gameHeader-logo' src={triviaTitle} alt={'title'} />
      </div>
      <Text text={`Pregunta ${questionNumber}/10`}/>
      <div className='gameHeader-coin-container'>
        <img className='gameHeader-coin' src={coin} alt={'title'} />
        <Text text={`${coins}`}/>
      </div>
      <CountdownTimer onFinishAnswerTime={onFinishAnswerTime} onFinishShowResultTime={onFinishShowResultTime} addTime={addTime} selectedAnswer={selectedAnswer} gameOver={gameOver}/>
    </div>
  )
}

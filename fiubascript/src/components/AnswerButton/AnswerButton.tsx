import React from 'react'
import './AnswerButton.css';

type AnswerButtonProps = {
  answer: string;
};

export const AnswerButton = ({ answer }: AnswerButtonProps) => {
  return (
    <button className='answer-button'>
      <div style={{
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}>
        {answer}
      </div>
    </button>
  );
};


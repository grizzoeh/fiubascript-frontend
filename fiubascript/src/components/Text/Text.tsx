import React from 'react'
import './Text.css'

interface TextProps {
  text: string;
  question?: boolean;
}

export const Text = ({text, question}: TextProps) => {
  return (
    <div className={`Text-base ${question && 'Text-question'}`}>{text}</div>
  )
}

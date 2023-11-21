import React from 'react'
import './Text.css'

interface TextProps {
  text: string;
}

export const Text = ({text}: TextProps) => {
  return (
    <div className={`Text-base`}>{text}</div>
  )
}

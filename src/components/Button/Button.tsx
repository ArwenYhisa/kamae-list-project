import React from 'react';
import './Button.css';

type ButtonPropsType = {
  text: string
  type: string
  action: () => void
}

export const Button = (props: ButtonPropsType) => {
  const { text, type, action } = props
  return (
    <button className={`custom-button ${type}`} onClick={action}>{text}</button>
  )
}

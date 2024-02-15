import React from 'react';
import "./button.scss";

function PrimaryButton({ title, onClick }) {
  return (
    <button onClick={onClick} className='button_primary'>{title}</button>
  );
}

export default PrimaryButton
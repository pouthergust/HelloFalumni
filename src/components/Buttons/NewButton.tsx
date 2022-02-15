import React from 'react';

import newButton from '../../assets/new.svg'

function NewButton() {
  const handleClick = () => {
    alert('Aooba')
  }
  
  return (
    <div className="c-button__background --newButton container">
      <button className="c-button --ter --newButton" onClick={handleClick}>
        <img src={newButton} alt="adicionar" />
      </button>
    </div>
  );
}

export default NewButton;
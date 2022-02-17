import React, { useState } from 'react';

import newButton from '../../assets/new.svg'
import CreateButton from './CreateButton';

function NewButton() {
  const [ createIsShowing, setcreateIsShowing ] = useState(false)

  const handleClick = () => {
    setcreateIsShowing(!createIsShowing)
  }
  
  return (
    <>
      <div className="c-button__background --newButton container">
        <button 
          className="c-button --ter --newButton" 
          onClick={handleClick}
        >
          <img 
            className={`c-button__img --newButton ${createIsShowing ? '--isShowing' : '' }`}  
            src={newButton} 
            alt="adicionar" 
          />
        </button>
      </div>
      <CreateButton isShowing={createIsShowing}/>
    </>
  );
}

export default NewButton;
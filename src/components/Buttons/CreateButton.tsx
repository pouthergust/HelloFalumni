import React from 'react';
import { useNavigate } from 'react-router-dom';

import plusIcon from '../../assets/plus.svg'

type CreateButtonProps = {
  isShowing: boolean
}

function CreateButton({ isShowing }: CreateButtonProps) {
  const navigate = useNavigate();
  const buttons = ['aluno', 'turma', 'curso', 'período']

  const handleNavigate = (route: string) => {
    if (route !== 'período') {
      navigate(`/cadastro/${route}`)
    } else {
      navigate(`/cadastro/periodo`)
    }
  }

  return (
    <div 
      className={`backdrop ${isShowing ? '--isShowing' : '' }`} 
      onClick={() => isShowing = false}
    >
      <div className={`c-button__wrapper --createButton ${isShowing ? '--isShowing' : '' }`}>
        {buttons.map((element, index) => {
          return (
            <button 
              key={index}
              className="c-button --sec --createButton" 
              onClick={() => handleNavigate(element)} 
            >
              <img className="c-button__img --createButton" src={plusIcon} alt="adicionar"/>
              <span>{element}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
}

export default CreateButton;
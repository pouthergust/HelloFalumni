import React from 'react';

import edit from '../../assets/edit.svg'
import view from '../../assets/view.svg'

type ListOptionButtonProps = {
    type: 'edit' | 'view',
    handleClick: (...args: any) => void
}

function ListOptionButton({ handleClick, type }: ListOptionButtonProps) {

  return (
    <button className="c-button --optBtn --pri" onClick={handleClick}>
        <img 
            src={type === 'edit' ? edit : view} 
            alt={type === 'edit' ? 'Editar' : 'visualizar'} />
    </button>
  );
}

export default ListOptionButton;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import backArrow from '../../assets/backArrow.svg'

type Page = {
  pages: number
}

function Back({ pages }:Page) {
  const navigate = useNavigate();

  return (
    <button className="c-button --ter --back" onClick={() => navigate(pages)}>
      <img src={backArrow} alt="voltar" />
      <span className="c-button__content --back"> voltar </span>
    </button>
  );
}

export default Back;
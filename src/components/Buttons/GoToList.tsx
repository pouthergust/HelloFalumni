import React from 'react';
import { useNavigate } from 'react-router-dom';

import forwardArrow from '../../assets/backArrow.svg'

type Props = {
  title: string
  navigateTo: string
}

const arrow = {
  transform: 'rotate(180deg)',
  height: '14px'
}

function GoToList({ title, navigateTo }:Props) {
  const navigate = useNavigate();

  return (
    <button className="c-button --ter --goToList" onClick={() => navigate(navigateTo)}>
      <span className="c-button__content --goToList"> {title} </span>
      <img src={forwardArrow} alt={`ir para ${title}`} style={arrow} />
    </button>
  );
}

export default GoToList;
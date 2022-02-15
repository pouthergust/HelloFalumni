import React from 'react';
import { Outlet } from 'react-router-dom';

import Back from '../components/buttons/Back'

function Forms() {

  return (
    <div className="c-forms__wrapper">
      <Back pages={-1} />
      <Outlet />
    </div>
  );
}

export default Forms;
import React from 'react';

import FormLogin from '../components/forms/formLogin'

import googleIcon from '../assets/googleIcon.svg';
import logo from '../assets/logo.svg';
import '../styles/index.css';

function Login()  {

  const handleSignUp = () => {
    console.log('opa, bora lá')
  }

  return (
    <div className="background">
      <div className="c-form__background --login">
        <img className="c-logo --ac-login" src={logo} alt="Logo - Alta costura" width="240px" />
        <FormLogin />

        <div className="divider">ou</div>

        <button className="c-button --enterWithGoogle" type="button">
          <img className="c-logo --google-login" src={googleIcon} alt="Logo - google" width="15px" />
          <span>Entre com o Google</span>
        </button>

        <button className="c-button --ter" onClick={handleSignUp}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'

import FormLogin from '../components/forms/formLogin'

import googleIcon from '../assets/googleIcon.svg';
import logo from '../assets/logo.svg';

function Login()  {
  const navigate = useNavigate()
  
  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
    .then(() => {
      const user = getAuth().currentUser
      if (user) navigate('/home')
    })
    .catch((error) => { throw Error(error) })

  }

  return (
    <div className="background">
      <div className="c-form__background --login">
        <img className="c-logo --ac-login" src={logo} alt="Logo - Alta costura" width="240px" />
        <FormLogin />

        <div className="divider --login">ou</div>

        <button className="c-button --enterWithGoogle" type="button" onClick={handleGoogleAuth}>
          <img className="c-logo --google-login" src={googleIcon} alt="Logo - google" width="15px" />
          <span>Entre com o Google</span>
        </button>

        <button className="c-button --ter" onClick={() => navigate('/cadastro/usuario')}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Login;
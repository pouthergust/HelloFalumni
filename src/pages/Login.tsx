import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'


import FormLogin from '../components/forms/formLogin'

import firebase from '../services/firebase'

import googleIcon from '../assets/googleIcon.svg';
import logo from '../assets/logo.svg';
import '../styles/index.css';

function Login()  {
  const navigate = useNavigate()

  const handleSignUp = () => {
    // const fbName = firebase.name
    // const fbOptions = firebase.options
    // const fbAuto = firebase.automaticDataCollectionEnabled

    // console.log(fbName, 'fbName')
    // console.log(fbOptions, 'fbOptions')
    // console.log(fbAuto, 'fbAuto')
    console.log('success')
    navigate('/cadastro/usuario')
  }

  const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    signInWithPopup(auth, provider)
      .then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        const token = credentials?.accessToken
        const user = result.user

        console.log(credentials, 'credentials')
        console.log(token, 'token')
        console.log(user, 'user')
      })

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

        <button className="c-button --ter" onClick={handleSignUp}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Login;
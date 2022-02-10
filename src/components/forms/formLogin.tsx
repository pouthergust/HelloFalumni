import React, { FormEvent, useState } from 'react';

import '../../styles/index.css';

function FormLogin()  {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(email, password)
  }

  return (
    <form className="c-forms --login" onSubmit={handleSubmit}>
      <fieldset className="c-fieldset">
        <legend className="c-fieldset__legend">Seja bem-vindo!</legend>
        <input 
          className="c-input" 
          type="email" 
          placeholder="e-mail" 
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input 
          className="c-input" 
          type="password" 
          placeholder="senha" 
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        
        <div className="c-buttons__wrapper --pw-recovery">
          <button className="c-button --ter --pw-recovery" type="submit">
            <sup className="c-button__content --pw-recovery">Esqueci minha senha</sup>
          </button>
        </div>


        <button className="c-button --pri" type="submit">Entrar</button>
      </fieldset>
    </form>
  );
}

export default FormLogin;
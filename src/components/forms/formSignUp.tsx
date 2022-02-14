import React, { ChangeEvent, FormEvent, useState } from 'react';
import { User, userInitialState } from '../../models/forms/User';

import FormBasicBoilerplate from './formBasicBoilerplate';

function FormSignUp() {
    const [ user, setUser ] = useState<User>(userInitialState)

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      console.log(user)
    }

    const formFields = [
      { field: 'nome', type: 'text', value: user.name, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, name: e.target.value})},
      
      { field: 'e-mail', type: 'email', value: user.email, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, email: e.target.value})},

      { field: 'senha', type: 'password', value: user.password, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, password: e.target.value})},

      { field: 'cargo', type: 'text', value: user.occupation, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, occupation: e.target.value})},
    ]

  return (
    <FormBasicBoilerplate title="Cadastro de usuario" handleSubmit={handleSubmit}>
      {formFields.map((element, key) => {
        return (
          <label className="c-label" htmlFor={element.field} key={key}><p>{element.field}</p>
            <input 
              id={element.field}
              className="c-input" 
              type={element.type} 
              placeholder={element.field}
              value={element.value}
              onChange={element.change}
              required
            />
          </label>
        )
      })}

      <button className="c-button --pri --submit">Enviar</button>
    </FormBasicBoilerplate>
  );
}

export default FormSignUp;
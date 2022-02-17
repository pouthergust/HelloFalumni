import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../../models/forms/FormField';
import { User, userInitialState } from '../../models/forms/User';

import FormBasicBoilerplate from './formBasicBoilerplate';

function FormSignUp() {
    const [ user, setUser ] = useState<User>(userInitialState)
    const auth = getAuth()
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()
      
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => { navigate('/login') })
        .catch((error) => { throw Error(error) })
    }

    const formFields: FormField[] = [
      // { field: 'nome', type: 'text', value: user.name, 
      // change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, name: e.target.value})},
      
      { field: 'e-mail', type: 'email', value: user.email, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, email: e.target.value})},

      { field: 'senha', type: 'password', value: user.password, 
      change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, password: e.target.value})},

      // { field: 'cargo', type: 'text', value: user.occupation, 
      // change: (e: ChangeEvent<HTMLInputElement>) => setUser({...user, occupation: e.target.value})},
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
              value={element.value as string}
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
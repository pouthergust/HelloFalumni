import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Class, classInitialState } from '../../models/forms/Class';
import { FormField } from '../../models/forms/FormField';
import FormBasicBoilerplate from './formBasicBoilerplate';

// import { Container } from './styles';

function FormsClass() {
  const [ course, setCourse ] = useState<Class>(classInitialState)

  const formFields: FormField[] = [
    
    { field: 'nome', type: 'text', value: course.name, 
    change: (e: ChangeEvent<HTMLInputElement>) => setCourse({...course, name: e.target.value})},

    { field: 'duração', type: 'number', value: course.duration, 
    change: (e: ChangeEvent<HTMLInputElement>) => setCourse({...course, duration: e.target.value})},

    { field: 'valor', type: 'number', value: course.value, 
    change: (e: ChangeEvent<HTMLInputElement>) => setCourse({...course, value: e.target.value})},

    { field: 'parcela', type: 'text', value: course.parcel, 
    change: (e: ChangeEvent<HTMLInputElement>) => setCourse({...course, parcel: e.target.value})},

    { field: 'descrição', type: 'text', value: course.description, 
    change: (e: ChangeEvent<HTMLInputElement>) => setCourse({...course, description: e.target.value})},
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(course)
  }

  return (
    <FormBasicBoilerplate title="Cadastro de Cursos" handleSubmit={handleSubmit}>
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

export default FormsClass;
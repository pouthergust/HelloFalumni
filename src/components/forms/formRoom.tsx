import React, { ChangeEvent, useState } from 'react';
import { FormField } from '../../models/forms/FormField';
import { Room, roomInitialState } from '../../models/forms/Room';
import FormBasicBoilerplate from './formBasicBoilerplate';

// import { Container } from './styles';

function FormsRoom() {
  const [ Room, setRoom ] = useState<Room>(roomInitialState)

  const formFields: FormField[] = [
    
    { field: 'turma', type: 'text', value: Room.name, 
    change: (e: ChangeEvent<HTMLInputElement>) => setRoom({...Room, name: e.target.value})},

    { field: 'Horario das aulas (início)', type: 'datetime', value: Room.classStart, 
    change: (e: ChangeEvent<HTMLInputElement>) => setRoom({...Room, classStart: e.target.value})},

    { field: 'Horario das aulas (término)', type: 'number', value: Room.classEnd, 
    change: (e: ChangeEvent<HTMLInputElement>) => setRoom({...Room, classEnd: e.target.value})},

    { field: 'curso', type: 'text', value: '', 
    change: (e: ChangeEvent<HTMLInputElement>) => setRoom({...Room, class: e.target.value})},

    { field: 'dia', type: 'text', value: Room.day, 
    change: (e: ChangeEvent<HTMLInputElement>) => setRoom({...Room, day: e.target.value})},
  ]

  const handleSubmit = () => {
    alert('Aooba')
  }

  return (
    <FormBasicBoilerplate title="Cadastro de Turmas" handleSubmit={handleSubmit}>
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

      <button className="c-button --sec --submit">Adicionar Período</button>
      <button className="c-button --pri --submit">Enviar</button>
    </FormBasicBoilerplate>
  );
}

export default FormsRoom;
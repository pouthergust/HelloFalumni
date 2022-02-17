import React, { ChangeEvent, useState } from 'react';
import { FormField } from '../../models/forms/FormField';
import { Student, studentInitialState } from '../../models/forms/Student';
import FormBasicBoilerplate from './formBasicBoilerplate';

// import { Container } from './styles';

function FormsStudent() {
  const [student, setStudent] = useState<Student>(studentInitialState)
  
  const formFields: FormField[] = [

    { field: 'nome',             type: 'text', value: student.name, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, name: e.target.value})},

    { field: 'rg',               type: 'text', value: student.rg, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, rg: e.target.value})},

    { field: 'cpf',              type: 'text', value: student.cpf, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, cpf: e.target.value})},

    { field: 'telefone',         type: 'phone', value: student.phone, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, phone: e.target.value})},

    { field: 'e-mail',           type: 'email', value: student.email, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, email: e.target.value})},

    { field: 'cep',              type: 'text', value: student.cep, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, cep: e.target.value})},

    { field: 'rua',              type: 'text', value: student.street, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, street: e.target.value})},

    { field: 'cidade',           type: 'text', value: student.city, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, city: e.target.value})},

    { field: 'uf',               type: 'text', value: student.uf, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, uf: e.target.value})},

    { field: 'turma',            type: 'text', value: student.room, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, room: e.target.value})},

    { field: 'dia',              type: 'text', value: student.day, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, day: e.target.value})},

    { field: 'curso',            type: 'text', value: student.class, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, class: e.target.value})},

    { field: 'data de inicio',   type: 'datetime', value: student.dateStart, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, dateStart: e.target.value})},

    { field: 'pagamento',        type: 'text', value: student.paymentMethod, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, paymentMethod: e.target.value})},

    { field: 'vencimento',       type: 'datetime', value: student.dueDate, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, dueDate: e.target.value})},

    { field: 'n° de parcelas',   type: 'number', value: student.parcel, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, parcel: e.target.value})},

    { field: 'valor da parcela', type: 'number', value: student.parcelValue, 
      change: (e: ChangeEvent<HTMLInputElement>) => setStudent({...student, parcelValue: e.target.value})},
  ]

  const handleSubmit = () => {
    alert('aoba') 
  }
  
  return (
  <FormBasicBoilerplate handleSubmit={handleSubmit} title="Cadastro de Aluno">
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
  ) ;
}

export default FormsStudent;
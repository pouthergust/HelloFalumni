import React from 'react';
import GoToList from '../Buttons/GoToList';
import Title from '../Title';

function Students() {
  const students = [
    { student: 'Stefany Camargo',   date: '10/03' },
    { student: 'Beatriz Larza',     date: '12/03' },
    { student: 'Maria Cristina',    date: '14/03' },
    { student: 'Angelia k. Vieira', date: '17/03' },
    { student: 'Nelly Canetero',    date: '20/03' },
    { student: 'Magali Correia',    date: '21/03' },
  ]

  return (
    <div className="container">
      <GoToList title="Alunos" navigateTo="/alunos"/>
      <Title title="Mensalidades proximas"/>
      <ul>
        {students.map((element, index) => {
          return (
            <li key={index} className="c-students__items">
              <span>{element.student}</span>
              <span>{element.date}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Students;
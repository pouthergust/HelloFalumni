import React from 'react';
import GoToList from '../Buttons/GoToList';
import ListOptionButton from '../Buttons/ListOptionButton';
import Search from '../Search';
import ListingLabel from './ListingLabel';

function Rooms() {
  const rooms = [
    { room: 'segunda', isFull: true  },
    { room: 'terça',   isFull: false },
    { room: 'quarta',  isFull: true  },
    { room: 'quinta',  isFull: true  },
    { room: 'sexta',   isFull: true  },
    { room: 'sabado',  isFull: false },
  ]

  return (
    <section className="c-rooms container">
      <GoToList title="Turmas" navigateTo="/lista/turmas"/>
      <div className="c-rooms__grid">
        {rooms.map((element, index) => {
          return (
            <button key={index} className={`c-button ${element.isFull ? '--pri' : '--sec'}`}>
              {element.room}
            </button>
          )
        })}
      </div>
    </section>
  );


}

export default Rooms;
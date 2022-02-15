import React from 'react';
import Students from '../components/Students';
import Nav from '../components/Nav';
import Rooms from '../components/Rooms';
import NewButton from '../components/buttons/NewButton';

function Home() {

  return (
    <div className="l-home">
      <Nav />
      <Rooms />
      <Students />
      <NewButton />
    </div>
  );
}

export default Home;
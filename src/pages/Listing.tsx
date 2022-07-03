import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ListingLabel from '../components/Rooms/ListingLabel';
import Search from '../components/Search';


function Listing() {

  useEffect(() => {
    console.log(window.location.pathname)
  },[])
  return (
    <div className="c-listing__wrapper c-rooms --listing">
      <Search />
      <ListingLabel title="Turmas"/>
      <Outlet />
    </div>
  );
}

export default Listing;
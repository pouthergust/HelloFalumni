import React from 'react';

import searchIcon from '../../assets/search.svg'

function Search() {

  return (
    <label className="c-input --search">
        <input 
            id="search" 
            type="search" 
            name="search" 
            placeholder="pesquisar"
        />
        <img src={searchIcon} alt="Icone de pesquisa" width="17" height="17"/>
    </label>
  );
}

export default Search;
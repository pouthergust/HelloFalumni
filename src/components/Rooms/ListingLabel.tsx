import React from 'react';
import Back from '../Buttons/Back';

type ListingLabelProps = {
    title: string
}

function ListingLabel({ title }: ListingLabelProps) {

  return (
    <div className="c-ListingLabel wrapper">
        <Back pages={-1} />
        <span>{ title }</span>
    </div>
  );
}

export default ListingLabel;
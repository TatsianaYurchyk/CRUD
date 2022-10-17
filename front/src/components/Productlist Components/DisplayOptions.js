import React, { Component } from 'react';
import DisplayBookOptions from './DisplayBookOptions';
import DisplayDvdOptions from './DisplayDvdOptions';
import DisplayFurnitureOptions from './DisplayFurnitureOptions';

const DisplayOptions = (props) => {

  const display = {
    1: <DisplayBookOptions weight={props.weight} />,
    2: <DisplayDvdOptions size={props.size}/>,
    3: <DisplayFurnitureOptions   height={props.height}  width={props.width}  length={props.length}/>,
  }

  const category = props.category_id;

  return (
    <div>
      {display[category]}
    </div>
  );
};


export default DisplayOptions;


import React, { Component } from 'react';
import BookOption from './Book option';
import DvdOption from './Dvd option';
import FurnitureOption from './Furniture option';

const FormOptions = (props) => {

  const display = {
    1: <BookOption changeHandlerOption={props.changeHandlerOption} inform={props.inform} validateOption={props.validateOption}/>,
    2: <DvdOption changeHandlerOption={props.changeHandlerOption} inform={props.inform} validateOption={props.validateOption}/>,
    3: <FurnitureOption changeHandlerOption={props.changeHandlerOption} inform={props.inform} validateOption={props.validateOption} />,
  }

  const category = props.category;

  return (
    <div className="mt-4">
      {display[category]}
    </div>
  )
};


export default FormOptions;


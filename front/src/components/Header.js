import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


const Header = (props) => {
  
  return (
       <Container>     
          <div className='mt-3 mb-3'>
            <h1>{props.title}</h1>     
            </div>    
        </Container>
  )
};

export default Header;

import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom"
import { Container } from 'react-bootstrap';
import FormCommon from '../components/Form components/FormCommon';
import Footer from '../components/Footer';

const AddProduct = () => {
  const navigate = useNavigate();

  return (

    <Container >
      <div className='row line sticky '>
        <div className="col-md-8 ">
          <Header title="Product Add" />
        </div>

        <div className="col-md-2 mt-3" >
          <Button type='submit' form='product_form' variant="outline-dark btn-lg" className='custom'> Save </Button>
        </div>

        <div className="col-md-2 mt-3">
          <Button variant="outline-dark btn-lg" className='custom' onClick={() => navigate("/ProductList")}>Cancel</Button>
        </div>
      </div>

      <div className='col-lg-8 pb-5' >
        <FormCommon />
      </div>

      <Footer />
    </Container>
  )

};

export default AddProduct;
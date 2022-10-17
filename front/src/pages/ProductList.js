import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ProductItem from '../components/Productlist Components/ProductItem'
import Footer from '../components/Footer';

const ProductList = () => {
  const navigate = useNavigate();
  const myRef = useRef();

  function refreshPage() {
    window.location.reload(false);
  }

  return (

    <Container>
      <div className="content">
        <div className='row sticky'>
          <div className="col-8 ">
            <Header title="Product List" />
          </div>
          <div className="col-md-2 mt-3 custom">
            <Button variant="outline-dark btn-lg" className="custom" onClick={() => navigate("/AddProduct")}>ADD</Button>
          </div>
          <div className="col-md-2 mt-3 ">
            <Button variant="outline-dark btn-lg" className="custom" onClick={() => { myRef.current.deleteProduct(); refreshPage() }}> MASS DELETE  </Button>
          </div>

        </div>
       
        <ProductItem ref={myRef} />
      </div>
      <div className='contentProtect'></div>
      <Footer />

    </Container>

  )
};

export default ProductList;
<?php

abstract class Product {
<<<<<<< HEAD
  public $sku;
    public $name;
    public $price;
    public $category_id;
    abstract public function getProduct();
=======
    public $sku;
    public $name;
    public $price;
    public $category_id;
    abstract public function getProduct($sku);
>>>>>>> 97671eecec86580c0e04999030d10e39c0895fbc
    abstract public function setProductOption();
    abstract public function deleteProduct();
  }   
  
?>
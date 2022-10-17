<?php

    class Category{

        private $conn;

        // tables mysql
        private $dbTable = "categories";

        // properties
        public $id; 
        public $name; 
        
      
        // db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // READ categories from db
        public function getCategory(){
            $sqlQuery = "SELECT id, name
               FROM $this->dbTable";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
 
    }
?>
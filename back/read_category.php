<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once 'config/database.php';
    include_once 'class/category.php';

    $database = new Database();
    $db = $database->getConnection();

    $items= new Category($db);

    $stmt = $items->getCategory();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        
        $categoryArr = array();
       

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "name" => $name
            );

            array_push($categoryArr, $e);
        }
        echo json_encode($categoryArr);
    }

?>
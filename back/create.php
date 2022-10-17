<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

    include_once 'config/database.php';
    include_once 'class/Dvd.php';
    include_once 'class/Book.php';
    include_once 'class/Furniture.php';

    $database = new Database();
    $db = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $lookupArray = [
        '1' => 'Book',
        '2' => 'Dvd',
        '3' => 'Furniture',
    ];

    $className = $lookupArray[$data->category_id];

    $item = new $className($db);

    $item->sku = $data->sku;
    $item->name = $data->name;
    $item->price = $data->price;
    $item->category_id = $data->category_id;
    $item->weight = $data->weight;
    $item->size = $data->size;
    $item->height = $data->height;
    $item->width = $data->width;
    $item->length = $data->length;
    $item->category_id  = $data->category_id;
    
    if($item->setProductOption()){
    echo json_encode("Created");
    } else{
    echo json_encode("Failed to create");
    }
   
      

    
?>
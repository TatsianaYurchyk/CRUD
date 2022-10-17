<?php
   
// hosting on 000webhost where methods DELETE and PUT do not work(available with the Pro Plan)

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
    $item->id = $data->id;
   
    if($item->deleteProduct()){
        echo json_encode("Product deleted.");
    } else{
        echo json_encode("Not deleted");
    }
      

    
?>
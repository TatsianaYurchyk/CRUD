<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");

include_once 'config/database.php';
include_once 'class/Book.php';
include_once 'class/Furniture.php';
include_once 'class/Dvd.php';


$database = new Database();
$db = $database->getConnection();

$book = new Book($db);
$dvd = new DVD($db);
$furniture = new Furniture($db);

$items = array($book, $dvd, $furniture);
$productArr = array();

foreach ($items as $item) {
    $stmt = $item->getProduct();
    $itemCount = $stmt->rowCount();
    if ($itemCount > 0) {

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $e = array(
                "id" => $id,
                "sku" => $sku,
                "name" => $name,
                "price" => $price,
                "category_id" => $category_id,
                "weight" => $weight,
                "size" => $size,
                "height" => $height,
                "width" => $width,
                "length" => $length,
            );
            array_push($productArr, $e);
        }
    }

    usort($productArr, function ($a, $b) {
        return ($b['id'] - $a['id']);
    });
}
echo json_encode($productArr);
    


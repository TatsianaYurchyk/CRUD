<?php
include_once dirname(__FILE__) . "/../abstract_class/Product.php";


class Dvd extends Product
{
    private $conn;

    // table mysql
    private $dbTable = "products";
    private $dbTable2 = "dvd";

    // properties
    public $sku;
    public $name;
    public $price;
    public $category_id;
    public $size;

    // db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Get Products from db
    public function getProduct()
    {
        $sqlQuery = "SELECT
                    products.id, products.sku, products.name, products.price, products.category_id, dvd.size 
                    FROM  $this->dbTable 
                    INNER JOIN $this->dbTable2
                    ON dvd.sku=products.sku
                    ORDER BY products.id DESC";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    // SET product properties
    public function setProductOption()
    {
        $sqlQuery = "INSERT 
                    INTO $this->dbTable
                    SET
                    sku = :sku, 
                    name = :name,
                    price = :price, 
                    category_id = :category_id";
        $stmt = $this->conn->prepare($sqlQuery);

        $sqlQuery2 = "INSERT 
                    INTO $this->dbTable2
                    SET sku = :sku, size = :size";

        $stmt2 = $this->conn->prepare($sqlQuery2);

        // sanitize
        $this->sku = htmlspecialchars(strip_tags($this->sku));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        $this->size = htmlspecialchars(strip_tags($this->size));

        // bind data
        $stmt->bindParam(":sku", $this->sku);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":category_id", $this->category_id);
        $stmt2->bindParam(":sku", $this->sku);
        $stmt2->bindParam(":size", $this->size);

        if ($stmt->execute() && $stmt2->execute()) {
            return true;
        }
        return false;
    }

    // DELETE Product
    function deleteProduct()
    {
        $sqlQuery = "DELETE 
                    FROM 
                    $this->dbTable 
                    WHERE id = ?";
        $stmt = $this->conn->prepare($sqlQuery);

        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}

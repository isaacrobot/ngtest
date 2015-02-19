<?php 
   
require_once 'dbHelper.php';

$db = new dbHelper();

$rows = $db->select("items","id,name,value",array());

echoResponse(200, $rows);

function echoResponse($status_code, $response) {
    echo json_encode($response,JSON_NUMERIC_CHECK);
}





?>

<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");

// $conn = new mysqli("localhost", "root", "root", "ngtest1");

// $result = $conn->query("SELECT id, name, value FROM items");

// $outp = "[";
// while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//     if ($outp != "[") {$outp .= ",";}
//     $outp .= '{"id":"'  . $rs["id"] . '",';
//     $outp .= '"name":"'   . $rs["name"]        . '",';
//     $outp .= '"value":"'. $rs["value"]     . '"}'; 
// }
// $outp .="]";

// $conn->close();

// echo($outp);
?>
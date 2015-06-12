<?php


/*
$pdo = new PDO('mysql:host=127.0.0.1;dbname=thanksdad', "root", "girkinLOH1", array(
    PDO::ATTR_PERSISTENT => true
));

$pdo = new PDO('mysql:host=localhost;dbname=thanksdad', "root", "girkinLOH1", array(
    PDO::ATTR_PERSISTENT => true
));
*/

$pdo = new PDO('mysql:host=188.166.55.191;dbname=yozh', "root", "girkinLOH1", array(
  //  PDO::ATTR_PERSISTENT => true,
//	PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
));

try
{
$secret_key = '56rZjlj9S2O0aUVE';
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

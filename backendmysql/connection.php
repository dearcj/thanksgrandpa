<?php


/*
$pdo = new PDO('mysql:host=127.0.0.1;dbname=thanksdad', "root", "girkinLOH1", array(
    PDO::ATTR_PERSISTENT => true
));

$pdo = new PDO('mysql:host=localhost;dbname=thanksdad', "root", "girkinLOH1", array(
    PDO::ATTR_PERSISTENT => true
));
*/

$pdo = new PDO('mysql:host=188.166.55.191;dbname=thanksdad', "root", "girkinLOH1", array(
    PDO::ATTR_PERSISTENT => true
));

try
{
$secret_key = '56rZjlj9S2O0aUVE';


/*new PDO("dblib:host=e5906u8eu8.database.windows.net;dbname=thanksdad_db4",
                "crazyjuice","girkinLOH1");*/
//,array(
//    PDO::ATTR_PERSISTENT => true
//)
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

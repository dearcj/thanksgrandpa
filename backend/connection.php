<?php
try
{

$secret_key = '56rZjlj9S2O0aUVE';

$pdo = new PDO("dblib:host=e5906u8eu8.database.windows.net;dbname=thanksdad_db4",
                "crazyjuice","girkinLOH1");
//,array(
//    PDO::ATTR_PERSISTENT => true
//)


$pdo->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

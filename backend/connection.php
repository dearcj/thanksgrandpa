<?php
try
{

$secret_key = '56rZjlj9S2O0aUVE';
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db2",
                "crazyjuice","girkinLOH1", array(PDO::ATTR_PERSISTENT => true));
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

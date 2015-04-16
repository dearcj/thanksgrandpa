<?php
try
{

$secret_key = '56rZjlj9S2O0aUVE';

$pdo = new PDO("dblib:host=e5906u8eu8.database.windows.net;dbname=thanksdad_db3",
                "crazyjuice","girkinLOH1",array(
    PDO::ATTR_PERSISTENT => true
));

$pdo->exec('SET CHARACTER SET windows-1251');
$pdo->query("SET NAMES windows-1251");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

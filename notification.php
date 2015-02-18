<?php
try
{
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$statement = $pdo->prepare("select * from thanksdad.tb_notifications");
$statement->execute();
$result = $statement->fetchAll();
   foreach($result as $item) {
    echo $item[message];
   }


print_r ($result);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

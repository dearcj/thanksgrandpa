
<?php
try
{
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->query('SELECT id from thanksdad_db.crazyjuice.tb_metrics');
}
catch (PDOException $e) {
    echo("ASSSSS");
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
  ?>

$statement = $pdo->prepare("select id from tb_metrics");
//$result = $statement->execute();
$row = $statement->fetch();
print $row;


<?php
try
{
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$statement = $pdo->prepare("SELECT * FROM tb_players");
$result = $statement->execute(array(':name' => "Jimbo"));
$row = $statement->fetch();
print $row;
}
catch (PDOException $e) {
    echo("ASSSSS");
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
  ?>

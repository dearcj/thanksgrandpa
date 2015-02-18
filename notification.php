
<?php
try
{
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");

$statement = $pdo->prepare("SELECT id, vkapi FROM thanksdad_db.tb_players");
    $result = $statement->execute();

$q = $pdo->query('SELECT id, vkapi FROM thanksdad_db.tb_players');
print($q[0]);

foreach($result as $row) {
                        echo($row);
                    }
}
catch (PDOException $e) {
    echo("ASSSSS");
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
  ?>


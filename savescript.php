<?php
try
{

$pl = $_POST['player'];

if (!$pl)
$pl = json_decode('{"id":"3EA0232F-4A28-4FD2-83AC-EC6254F90BC6","ref":null,"vkapi":null,"xp":0,"createDate":"2015-04-14T11:36:14.849Z","updateDate":"2015-04-14T15:22:38.462Z","userId":"Custom:3EA0232F-4A28-4FD2-83AC-EC6254F90BC6","money":0,"crystals":0,"maxdistance":153,"lvl":1,"energy":5.086056666666667,"name":null,"last_name":null,"rank":null,"combodate":"2015-04-14T15:21:33.158Z","keys":null,"platformid":"CARLAPA2882845ww"}', true);

$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db2",
                "crazyjuice","girkinLOH1");
foreach($pl as $key => $value){
	if ($value == null) continue;
  $sql[] = (is_numeric($value)) ? "$key = $value" : "$key = " . $pdo->quote($value); 
}
$sqlclause = implode(",",$sql);
$wholestr = "UPDATE thanksdad.tb_players SET $sqlclause WHERE id = " . $pdo->quote($pl['id']);
print_r ($wholestr);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$statement = $pdo->prepare($wholestr);
$statement->execute();
$result = $statement->fetchAll();

print_r ($result);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

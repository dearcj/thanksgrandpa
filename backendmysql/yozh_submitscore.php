<?php
header('Content-type: text/json; charset=UTF-8');
require_once 'yozh_connection.php';

$score = $_POST['score'];
$name = $_POST['name'];

$plscript = "SELECT id, score FROM yozh.tb_players WHERE name = ".$pdo->quote($name);
$statement = $pdo->prepare($plscript);
$statement->execute();
$res = $statement->fetchAll(PDO::FETCH_ASSOC);
$player = $res[0];
	if ($player != null) {
		if ($score > $player['score'])
		{
			$wholequery = "UPDATE yozh.tb_players set score = ".$pdo->quote($score)." where name = ".$pdo->quote($name);
			//echo $wholequery;
			$statement = $pdo->prepare($wholequery);
			$statement->execute();
		}
	} else 
	{
		$plscript = "INSERT INTO yozh.tb_players (score, name) VALUES (".$pdo->quote($score).",".$pdo->quote($name).");";
		//echo $plscript;
		$statement = $pdo->prepare($plscript);
		$statement->execute();
	}
?>
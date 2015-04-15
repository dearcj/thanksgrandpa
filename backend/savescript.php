﻿<?php
try
{

function insertJSON($conn, $table, $jsonString, $jsonEncoded)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == null) continue;
		$sqlkeys[] = $key; 
		$sqlvalues[] = (is_numeric($value)) ? "$value" : $conn->quote($value); 
	}
$valuesstr = implode(",",$sqlvalues);
$keystr = implode(",",$sqlkeys);
$wholestr = "INSERT INTO thanksdad.".$table." (".$keystr.") VALUES (".$valuesstr .");";
$statement = $conn->prepare($wholestr);
$statement->execute();
print($wholestr);
print($pdo->lastInsertId('id'));
$statement = null;
return $conn->lastInsertId();
}

function updateJSON($table, $jsonString, $jsonEncoded)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == null) continue;
		$sql[] = (is_numeric($value)) ? "$key = $value" : "$key = " . $conn->quote($value); 
	}
$sqlclause = implode(",",$sql);
$wholestr = "UPDATE thanksdad.".$table." SET $sqlclause WHERE id = " . $conn->quote($obj['id']);
$statement = $conn->prepare($wholestr);
$statement->execute();
$result = $statement->fetchAll();
$statement = null;
return $result;
}
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

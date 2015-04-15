﻿<?php
try
{

function readJSON($conn, $table, $userid, $id)
{
	if ($table == "tb_ach_player" || $table == "tb_item_player" || $table == "tb_edevent_player")
	{
		$filter[] = "id_player = " . $userid;
	}
	
	if ($table == "tb_players")
	{
		$filter[] = "id = " . $userid;
	} else
	if ($id != null)
	{
		$filter[] = "id = " . $id;	
	}
	
	if (count($filter) > 0)
 	{
		$filterstr = "WHERE ".implode(",",$filter);
	} else
	$filterstr = "";
	$wholequery = "select *  from thanksdad.".$table.$filter;
	echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll();
	return $result;
}


function insertJSON($conn, $table, $jsonString, $jsonEncoded)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
	//	if ($value == null) continue;
		$sqlkeys[] = $key; 
		$sqlvalues[] = (is_numeric($value)) ? "$value" : $conn->quote($value); 
	}
$valuesstr = implode(",",$sqlvalues);
$keystr = implode(",",$sqlkeys);
$wholestr = "INSERT INTO thanksdad.".$table." (".$keystr.") VALUES (".$valuesstr .");";
$statement = $conn->prepare($wholestr);
$res = $statement->execute();
//print($wholestr);

$statement = null;
return $res;
}

function updateJSON($table, $jsonString, $jsonEncoded)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == '') continue;
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

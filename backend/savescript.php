<?php
try
{

function insertJSON($table, $jsonString, $jsonEncoded)
{
	if (!jsonEncoded)
	{
		$obj = json_decode(jsonString);
	} else $obj = jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == null) continue;
		$sqlkeys[] = $key; 
		$sqlvalues[] = (is_numeric($value)) ? "$value" : $pdo->quote($value); 
	}
$valuesstr = implode(",",$sqlvalues);
$keystr = implode(",",$sqlkeys);
$wholestr = "INSERT INTO thanksdad.".$table." (".keystr.") VALUES (".$valuesstr .");";
$statement = $pdo->prepare($wholestr);
$statement->execute();
$result = $statement->fetchAll();
$statement = null;
return $result;
}

function updateJSON($table, $jsonString, $jsonEncoded)
{
	if (!jsonEncoded)
	{
		$obj = json_decode(jsonString);
	} else $obj = jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == null) continue;
		$sql[] = (is_numeric($value)) ? "$key = $value" : "$key = " . $pdo->quote($value); 
	}
$sqlclause = implode(",",$sql);
$wholestr = "UPDATE thanksdad.".$table." SET $sqlclause WHERE id = " . $pdo->quote($obj['id']);
$statement = $pdo->prepare($wholestr);
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

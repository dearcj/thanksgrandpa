
<?php
header("Content-Type: application/json; encoding=utf-8");

try
{
$conn = mssql_connect("tcp:te1gwbas4s.database.windows.net,1433", "crazyjuice", "girkinLOH1");
} catch (PDOException $e ) {
 print( "Error connecting to SQL Server." );
  die(print_r($e));
  }
  ?>


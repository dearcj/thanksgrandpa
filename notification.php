
<?php
header("Content-Type: application/json; encoding=utf-8");
$conn = new PDO ("sqlsrv:server = tcp:te1gwbas4s.database.windows.net,1433; Database = thanksdad_db", "crazyjuice",
"girkinLOH1");
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION );
catch (PDOException $e ) {
 print( "Error connecting to SQL Server." );asd
  die(print_r($e));
  }
  ?>
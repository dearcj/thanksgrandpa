
<?php
try
{new PDO ("sqlsrv:server=tcp:te1gwbas4s.database.windows.net,1433;database=thanksdad_db", "crazyjuice",
"girkinLOH1");
$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION );
}
catch (PDOException $e ) {
 echo( "Error connecting to SQL Server." );
  die(print_r($e));
  }

  ?>


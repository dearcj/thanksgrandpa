
<?php
header("Content-Type: application/json; encoding=utf-8");

$conn = mssql_connect("te1gwbas4s.database.windows.net", "crazyjuice", "girkinLOH1");

if($conn != FALSE)
{
echo "Connected to the database server OK<br />";
}
else
{
echo "ASSS";
die("Couldn't connect");
}

  ?>


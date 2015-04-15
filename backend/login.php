<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';
try
{
$vkid = $_POST['vkid'];
$vkid = 'Allahu akbar9';
if (!$vkid) return;

$strFindPlayer = "select TOP 1 platformid, id from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid);
$statement = $pdo->prepare($strFindPlayer);
$statement->execute();
$result = $statement->fetchAll();
   if ($result && count($result > 0))
   {
	   $userid = $result[0]['id'];
      echo 'LOGIN USER WITH ID = ' . $userid;
	}  else
   {
    echo 'REGISTER NEW USER';
	
	$res= insertJSON($pdo, "tb_players", null, array('platformid' => $vkid,
    'money' => 0,
    'crystals' => 0,
    'xp' => 0,
    'lvl' => 1,
    'energy' => 10, 
	'maxdistance' => 0));
	
	if ($res)
	{
		$statement = $conn->prepare($strFindPlayer);
		$statement->execute();
        $playerResult = $statement->fetchAll();
		echo json_encode($playerResult);
	} else die();
   }

$token = array();
$token['vkid'] = $vkid;
$token['userid'] = $userid;
echo JWT::encode($token, $secret_key);

}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

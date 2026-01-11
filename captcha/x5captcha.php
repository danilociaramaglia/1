<?php
include("../res/x5engine.php");
$nameList = array("zse","vam","z8f","j7v","hmn","u3z","58f","lsf","maf","wru");
$charList = array("W","A","F","L","8","L","P","3","X","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php

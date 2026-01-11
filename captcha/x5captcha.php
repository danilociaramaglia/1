<?php
include("../res/x5engine.php");
$nameList = array("gyu","phc","nz3","m7p","jtl","xnh","dps","hra","g26","3vp");
$charList = array("7","Z","N","N","7","C","H","3","E","M");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php

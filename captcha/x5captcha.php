<?php
include("../res/x5engine.php");
$nameList = array("574","r8k","vz8","2fu","exm","3xx","ana","emp","dzg","mv8");
$charList = array("W","N","V","K","8","E","Z","S","F","H");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php

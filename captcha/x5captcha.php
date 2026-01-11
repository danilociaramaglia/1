<?php
include("../res/x5engine.php");
$nameList = array("kcr","8tx","rcr","ewy","z47","kyd","l8r","ld3","tup","spw");
$charList = array("Z","E","H","U","M","3","7","2","Y","V");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php

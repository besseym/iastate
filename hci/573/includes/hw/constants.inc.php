<?php

//define ("SERVER", "local");
define ("SERVER", "production");

$context_path = "";
if(SERVER == "local"){
	$context_path = "/iastate";
}

$context_path = $context_path . "/hci/573";

define ("REAL_BASE", $_SERVER['DOCUMENT_ROOT'] . $context_path);
define ("SITE_BASE", "http://".$_SERVER['HTTP_HOST'] . $context_path);

?>
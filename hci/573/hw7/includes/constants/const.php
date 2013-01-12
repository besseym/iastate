<?php
/*FILE: const.php*/
define("SITE_BASE", "http://localhost:8888/hci_573/hw7");

function get_image($id)
{
	if($id != 3)
	{
		return "ID was not equal to 3";
	}
	elseif($id == 5)
	{
		return "ID was equal to 5";
	}
	else
	{
		return "Not sure who's ID we've got";
	}
}

$title = "Homework 7: Michael Bessey, February 27th 2012";

?>
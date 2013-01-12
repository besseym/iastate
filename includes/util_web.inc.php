<?php

function parse_parameter($p_index = 'p'){
	
	//parse the page number
	$p = null;
	
	if(isset($_GET[$p_index])){
		$p = $_GET[$p_index];
	}
	elseif(isset($_POST[$p_index])){
		$p = $_POST[$p_index];
	}
	
	if(!isset($p)){
		$p = 'home';
	}
	
	return $p;
}

?>
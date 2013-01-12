<?php

function is_valid_email($email){
	return !empty($email) && (filter_var($email, FILTER_VALIDATE_EMAIL)) ? TRUE : FALSE;
}

//validates pattern (021)423-2323
function is_valid_phone($phone){
	return (preg_match('/\(?\d{3}\)?[-\s.]?\d{3}[-\s.]\d{4}/x', $phone)) ? TRUE : FALSE;
}

function is_valid_date($input, $format = "Y-m-d"){

	$input = trim($input);
	$time = strtotime($input);
	$date = date($format, $time);
	
	return ($date == $input);
}

function is_valid_length($text, $size = NULL){
	return (empty($text) || ($size !== NULL && strlen($text) < $size)) ? FALSE : TRUE;
}

?>
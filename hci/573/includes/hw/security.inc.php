<?php

function sign_in($user){
	$_SESSION[USER] = serialize($user);
	$_SESSION[LOGGED] = true;
}

function get_authenticated_user(){

	$user = NULL;
	if(is_signed_in()){
		$user = unserialize($_SESSION[USER]);
	}

	return $user;
}

function is_signed_in(){
	return isset($_SESSION[USER]) && !empty($_SESSION[USER]);
}

function logout($db_link, $lm = NULL){
	
	if(is_signed_in()){
	
		//clear user db session info
		$user = get_authenticated_user();
		clear_user_session_info($db_link, $user->id);
		unset($_SESSION[USER]);
	}
	
	unset($_SESSION[LOGGED]);
	session_unset();
	session_destroy();
	
	if(isset($lm)) {
		header("Location: " . PAGE_LOGIN . "&msg=" . $lm);
	}
	else {
		header("Location: " . PAGE_LOGIN);
	}
	
	exit;
}

function secure_page($db_link){
	
	if(is_signed_in()){
	
		$user = get_authenticated_user();
	
		//Secure against Session Hijacking by checking user agent
		if($user->ip_address != md5($_SERVER['HTTP_USER_AGENT']) || $_SESSION[LOGGED] != true){
			
			logout($db_link);
		}

		//verify that the user in the session matches the user in the db
		if(!does_db_user_match_session_user($db_link, $user)){
			
			logout($db_link);
		}
	}
	//if we get to this, then there is no user logged in to be validated
	else{
		logout($db_link);
	}
}

function generate_key($length = 7){

	$password = "";
	$possible = "0123456789abcdefghijkmnopqrstuvwxyz";

	$i = 0;
	while ($i < $length){
	
		$char = substr($possible, mt_rand(0, strlen($possible)-1), 1);
		if (!strstr($password, $char))
		{
			$password .= $char;
			$i++;
		}
	}
	return $password;
}

?>
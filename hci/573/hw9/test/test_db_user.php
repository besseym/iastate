<?php

require "../includes/constants.inc.php";
require REAL_BASE . "includes/db/db_constants.inc.php";
require REAL_BASE . "includes/db/db_user.inc.php";
require REAL_BASE . "includes/db/db_install.inc.php";
require REAL_BASE . "includes/db/db_connect.inc.php";

function test_insert_user($db_link){
	
	$user = new User;
	$user->name = "name";
	$user->username = "username";
	$user->email = "user@mail.com";
	$user->password = "password";
	$user->ip_address = $_SERVER['REMOTE_ADDR'];
	
	if(insert_user($db_link, $user)){
		echo "successful user insert with id: " . mysql_insert_id($db_link);
	}
	else {
		echo "UNsuccessful user insert";
	}
}

function test_authenticate_user($db_link){
	
	$user = authenticate_user($db_link, "username", "user@mail.com", "password");
	if($user != null){
		echo var_dump($user);
	}
	else {
		echo "unable to authenticate user";
	}
}

function test_does_user_exist($db_link){
	
	if(does_user_exist($db_link, "username", "user@mail.com")){
		echo "user does exists";
	}
	else {
		echo "user does NOT exists";
	}
}

function test_update_users_md5_id($db_link){
	
	$user = authenticate_user($db_link, "username", "user@mail.com", "password");
	
	if(update_users_md5_id($db_link, $user)){
		echo "md5 id successfully updated";
	}
	else {
		echo "md5 id UNsuccessfully updated";
	}
}

function test_is_user_approved($db_link){
	
	$approved = get_user_approval($db_link, "admin", "user@mail.com", "admin"); 
	
	if($approved != null && $approved == 0){
		echo "user is NOT approved";
	}
	else if($approved != null && $approved == 1) {
		echo "user is approved";
	}
	else {
		echo "users approval is unknown: " . $approved;
	}
}

function test_user_session_info($db_link){
	
	$user = authenticate_user($db_link, "username", "user@mail.com", "password");
	$user->c_key = "key";
	$user->c_time = time();
	
	if(update_user_session_info($db_link, $user)){
		echo "user session info successfully updated";
	}
	else {
		echo "user session info UNsuccessfully updated";
	}
	
	if(does_db_user_match_session_user($db_link, $user)){
		echo "user session info does match";
	}
	else {
		echo "user session info does NOT match";
	}
}

function test_find_all_users($db_link){
	
	$user_array = find_all_users($db_link);
	foreach($user_array as $user){
		echo $user . '\n';
	}
}

function test_activate_user_by_id($db_link){

	$user_id = "a87ff679a2f3e71d9181a67b7542122c";
	$activation_code = 1132;
	
	if(activate_user_by_id($db_link, $user_id, $activation_code)){
		echo "user account was successfully activated";
	}
	else {
		echo "unable to verify account";
	}
}

function test_activate_user_by_email($db_link){

	$email = "user@mail.com";
	$activation_code = 1132;
	
	if(activate_user_by_email($db_link, $email, $activation_code)){
		echo "user account was successfully activated";
	}
	else {
		echo "unable to verify account";
	}
}


//test_insert_user($db_link);
//test_authenticate_user($db_link);
//test_does_user_exist($db_link);
//test_update_users_md5_id($db_link);
//test_is_user_approved($db_link);
//test_user_session_info($db_link);
//test_find_all_users($db_link);
//test_activate_user_by_id($db_link);
test_activate_user_by_email($db_link);

mysql_close($db_link);

?>
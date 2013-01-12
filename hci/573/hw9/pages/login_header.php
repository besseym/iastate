<?php

$username = "";
$password = "";

$submitted = isset($_POST['submit']) && $_POST['submit'] == 'Log In';
if($submitted){
	
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);
	
	//validate username
	if(!is_valid_length($username, 4)){
		$messageArray[] = "Your username must be at least 4 characters in length.";
	}
	
	//validate password input
	if(empty($password)){
		$messageArray[] = "You seem to have forgotton to provide a password.";
	}
	
	$approved = get_user_approval($db_link, $username, "", $password);
	if($approved != null && $approved == 0){
		$messageArray[] = "You will NOT be able to login to your account until it has been activated.";
		$messageArray[] = "Proceed <a href=\"" . PAGE_ACTIVATE . "\">here</a> to activate you account.";
	}
	
	//there were no error messages attempt to sign in user
	if(empty($messageArray)){
	
		$user = authenticate_user($db_link, $username, "", $password);
		if($user != NULL){
		
			$user->ip_address = md5($_SERVER['HTTP_USER_AGENT']);
			$user->c_key = generate_key();
			$user->c_time = time();
			
			update_user_session_info($db_link, $user);
		
			sign_in($user);
			header("Location: " . PAGE_PROFILE);
			exit;
		}
		else {
			$messageArray[] = "The username or password you entered is incorrect.";
		}
	}
}

?>
<?php


//activation by email link
if(isset($_GET['user']) && !empty($_GET['user']) && !empty($_GET['code']) && is_numeric($_GET['code']) ){

	$user_id = $_GET['user'];
	$activation_code = $_GET['code'];
	
	if(activate_user_by_id($db_link, $user_id, $activation_code)){
		$messageArray[] = "Your account was activated successfully!  You may now <a href='" . PAGE_LOGIN . "'>login</a>.";
	}
	else {
		$messageArray[] = "I'm sorry. We were unable to verify your account. Please try again with the form below.";
	}
}

$email = "";
$activation_code = "";

//activation by form post
$submitted = isset($_POST['activate']) && $_POST['activate'] == 'Activate Account';
if ($submitted){
	
	
	$email = trim($_POST['email']);
	$activation_code = trim($_POST['activation-code']);
	
	//validate email
	if(!is_valid_email($email)){
		$messageArray[] = "Please provide a valid email address.";
	}
	
	//validate password input
	if(empty($activation_code)){
		$messageArray[] = "You must provide an activation code to activate your account.";
	}
	else if(!is_numeric($activation_code)){
		$messageArray[] = "Please provide a valid activation code.";
	}
	
	//there were no error messages added, attempt to activate account
	if(empty($messageArray)){
		
		if(activate_user_by_email($db_link, $email, $activation_code)){
			$messageArray[] = "Your account was activated successfully!  You may now <a href='" . PAGE_LOGIN . "'>login</a>.";
		}
		else {
			$messageArray[] = "I'm sorry. We were unable to verify your account.";
		}
	}
}


?>
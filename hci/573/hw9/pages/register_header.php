<?php

//initialize variables to be used in the form
$name = "";
$email = "";
$username = "";
$password = "";
$password_confirm = "";

//check if form has been submitted
$submitted = isset($_POST['register']) && $_POST['register'] == 'Submit Registration';
if($submitted){

	//trim extra space and assign form inputs to variables
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);
	$password_confirm = trim($_POST['password-confirm']);
	
	//validate name
	if(!is_valid_length($name, 4)){
		$messageArray[] = "Your name must be at least 4 characters in length.";
	}
	
	//validate email
	if(!is_valid_email($email)){
		$messageArray[] = "Please provide a valid email address.";
	}
	else if(!is_valid_length($email, 4)) {
		$messageArray[] = "Your email address must be at least 4 characters in length.";
	}
	
	//validate username
	if(!is_valid_length($username, 4)){
		$messageArray[] = "Your username must be at least 4 characters in length.";
	}
	
	//validate password
	if(!is_valid_length($password, 4)){
		$messageArray[] = "Your password must be at least 4 characters in length.";
	}
	else if($password != $password_confirm){
		$messageArray[] = "Your password does not match your password confirmation.";
	}
	
	//there were no error messages added, attempt to register user
	if(empty($messageArray)){
		
		//check if the user exists first
		if(!does_user_exist($db_link, $username, $email)){
		
			$user = new User;
			$user->name = $name;
			$user->email = $email;
			$user->username = $username;
			$user->password = $password;
			$user->generate_activation_code();
			$user->ip_address = $_SERVER['REMOTE_ADDR'];
		
			if(insert_user($db_link, $user)){
			
				$user->id = mysql_insert_id($db_link);
				$user->generate_md5_id();
				update_users_md5_id($db_link, $user);
				
				//send activation email
				send_html_activation_msg($user);
				
				$messageArray[] = "You have successfully registered.";
				$messageArray[] = "You will receive an activation email shortly."; 
				$messageArray[] = "You must activate you account before you can login.";
			}
			else {
				$messageArray[] = "Unfortunaty an error occurred during registration. Please try again later. Thank you for your patience.";
			}
		}
		else {
			$messageArray[] = "That email address and/or username is already in use.";
		}
	}
}

?>
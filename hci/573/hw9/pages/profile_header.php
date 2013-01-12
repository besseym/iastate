<?php

//this is a secure page
secure_page($db_link);

$user = get_authenticated_user();

//initialize variables to be used in the form
$name = $user->name;
$email = $user->email;
$username = $user->username;
$password = "";
$password_confirm = "";

//check if form has been submitted
$submitted = isset($_POST['update']) && $_POST['update'] == 'Update Profile';
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
	
	//if password is not empty validate
	if(!empty($password)){
		//validate password
		if(!is_valid_length($password, 4)){
			$messageArray[] = "Your password must be at least 4 characters in length.";
		}
		else if($password != $password_confirm){
			$messageArray[] = "Your password does not match your password confirmation.";
		}
	}
	
	//check if the user exists first
	if(is_email_being_used($db_link, $user->id, $email)){
		$messageArray[] = "That email address is already taken.";
	}
	
	if(is_username_being_used($db_link, $user->id, $username)){
		$messageArray[] = "That username is already taken.";
	}
	
	//there were no error messages added, attempt to register user
	if(empty($messageArray)){
		
		$user->name = $name;
		$user->email = $email;
		$user->username = $username;
		if(!empty($password)){
			$user->password = $password;
		}
	
		if(update_user($db_link, $user)){
		
			//update user in session
			sign_in($user);
			$messageArray[] = "Your account information has been updated successfully.";
		}
		else {
			$messageArray[] = "Unfortunaty an error occurred during your account update. Please try again later.";
		}
	}
}

?>
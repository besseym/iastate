<?php

//this is a secure page
secure_page($db_link);

//this is an admin page
$user = get_authenticated_user();
if($user == null || !$user->is_admin())
{
	header("Location: " . PAGE_PROFILE);
	exit;
}


if(isset($_GET['action']) && $_GET['action'] == "delete" && isset($_GET['id'])){
	
	$id = $_GET['id'];
	if(delete_user($db_link, $id)){
		$messageArray[] = "Successfully deleted user with id " . $id;
	}
	else {
		$messageArray[] = "Unable to delete user with id " . $id;
	}
	
}

//initialize variables to be used in the form
$name = "";
$email = "";
$username = "";

//check if create user form has been submitted
$submitted = isset($_POST['create']) && $_POST['create'] == 'Create User';
if($submitted){

	//trim extra space and assign form inputs to variables
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$username = trim($_POST['username']);
	
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
	
	//there were no error messages added, attempt to register user
	if(empty($messageArray)){
		
		//check if the user exists first
		if(!does_user_exist($db_link, $username, $email)){
		
			$user = new User;
			$user->name = $name;
			$user->email = $email;
			$user->username = $username;
			$user->password = generate_key();
			$user->generate_activation_code();
			$user->ip_address = $_SERVER['REMOTE_ADDR'];
		
			if(insert_user($db_link, $user)){
			
				$user->id = mysql_insert_id($db_link);
				$user->generate_md5_id();
				update_users_md5_id($db_link, $user);
				
				//send activation email
				send_html_activation_msg($user);
				
				$messageArray[] = "The account with username '". $user->username . "' was successfully added to the system.";
				$messageArray[] = "Also, an activation email has been sent to this user.";
			}
			else {
				$messageArray[] = "An error occurred during the creation process.";
			}
		}
		else {
			$messageArray[] = "That email address and/or username is already in use.";
		}
	}
}


//find all the users in the system.
//this list does not include administrators
$user_array = find_all_users($db_link);

?>
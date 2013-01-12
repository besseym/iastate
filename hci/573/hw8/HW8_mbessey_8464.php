<?php
/*
Homework 8: Michael Bessey, March 10th 2012

**Homework 8: Create and test a PHP function to sanitize user input using HTML forms, PHP, Jquery, and MySQL

**You will need to:

	*1.  Create a user input form with AT LEAST 4 input fields
		*1a.  At least 1 field must be an email address
		*1b.  At least 1 field must be a password
			*1b1.  The password MUST be encrypted using PHP's hash() function
	*2.  Use the jquery.validate library to provide real-time input feedback for form fields (included in js folder)
	*3.  Create a MySQL table which corresponds with your form fields
	*4.  Use PHP to sanitize user input
	*5.  Use PHP to validate input email address
	*6.  Use PHP to determine whether or not user input meets acceptable length requirements for your fields
	*7.  Use a PHP array to collect and display user input errors
	*8.  Include a separate page to display the entries located in your db

***You will be graded on:
	*Your script functioning fully (5pts)
	*The level of error checking which you have implemented (3pts)
		*I.e., ensure that I am NOT able to submit an invalid email address and have the form submit!!!
	*Code commenting and usage (2pts)

***DO NOT FORGET TO READ THE INSTRUCTIONS CAREFULLY, AND BE SURE TO INCLUDE A NEW PAGE FOR #8

**Submit this assignment through the course website, and ensure that the filename is HW8_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW8_EMAIL_LAST4OFID.zip").
*/
//END INSTRUCTIONS

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

require REAL_BASE . "/includes/hw/validation.inc.php";

//initialize variables to be used in the form
$email = "";
$name = "";
$phone = "";
$birthdate = "";
$password = "";

//to store feed back messages to user
$messageArray = array();

//check if form has been submitted
$submitted = isset($_POST['register']) && $_POST['register'] == 'Submit';
if($submitted){

	//trim extra space and assign form inputs to variables
	$email = trim($_POST['email']);
	$name = trim($_POST['name']);
	$birthdate = trim($_POST['birthdate']);
	$phone = trim($_POST['phone']);
	$password = trim($_POST['password']);
	
	//validate email
	if(!is_valid_email($email)){
		$messageArray[] = "Please provide a valid email address.";
	}
	else if(!is_valid_length($email, 4)) {
		$messageArray[] = "Your email address must be at least 4 characters in length.";
	}
	
	//validate name
	if(!is_valid_length($name, 4)){
		$messageArray[] = "Your name must be at least 4 characters in length.";
	}
	
	//validate phone
	if(!is_valid_phone($phone)){
		$messageArray[] = "Please provide a valid phone number.";
	}
	
	//validate date
	if(!is_valid_date($birthdate)){
		$messageArray[] = "Please provide a valid birthdate.";
	}
	
	//validate password
	if(!is_valid_length($password, 4)){
		$messageArray[] = "Your password must be at least 4 characters in length.";
	}
	
	//there were no error messages added attempt to insert or update existing record
	if(empty($messageArray)){
	
		//super secret salt key
		$salt = '$2a$07$secretmbesseypasswardsalt$';
	
		//sanitizing values for database entry
		$email = db_string_filter($email);
		$name = db_string_filter($name);
		$password = db_string_filter($password);
		$birthdate = db_string_filter($birthdate);
		
		//encrypt password 
		//crypt method better than hash method
		$encrypted_password = crypt($password, $salt);
		
		//select account password from the db table if the input email (after being encrypted) matches the encrypted email in the db
		$q = mysql_query("select password from hw8 where email = '$email'") or die(mysql_error());
	
		//if a user matched, select only the password
		list($account_password) = mysql_fetch_row($q);
	
		//If someone was found, check to see if passwords match
		if(mysql_num_rows($q) > 0){
		
			//if passwords matched update the record in the database
			if($encrypted_password === $account_password){
			
				$update = "update hw8 set name='$name', birthdate='$birthdate', phone='$phone', updated_at = CURRENT_TIMESTAMP where email='$email'";
				$result = mysql_query($update) or die("Update Failed:" . mysql_error());
				
				if($result){
					$messageArray[] = "Your account has been successfully updated.";
				}
				else {
					$messageArray[] = "An error occurred while updating your record. Please try again.";
				}
			}
			else {
			
				//Passwords don't match, issue an error
				$messageArray[] = "Your password does not match the email address you provided.";
			}
		}
		//if record with given email address doesn't already exist insert new record with encrypted password
		else {
		
			$insert = "insert into hw8 (name, email, password, birthdate, phone) values ('$name', '$email', '$encrypted_password', '$birthdate', '$phone')";
			$result = mysql_query($insert) or die("Insertion Failed:" . mysql_error());
			
			if($result){
				$messageArray[] = "Your record was successfully entered.";	
			}
			else {
				$messageArray[] = "An error occurred while attempting to insert your information. Please try again.";
			}
		}
	}
}


$title = "Homework 8: Michael Bessey, March 10th 2012";

?>
<html>
<head>

	<title><?php echo $title ?></title>
	
	<script language="JavaScript" type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
	<script language="JavaScript" type="text/javascript" src="js/jquery.validate.js"></script>
	<script>
	$(document).ready(function(){
		$("#register_update_form").validate();
	});
	</script>

	<style type="text/css">
		.error {
			color: red;
			font-weight: bold;
		}
	</style>

</head>
<body>

<h1><?php echo $title ?></h1>

<?php $has_messages = !empty($messageArray); ?>
<div id="flash" class="<?php if(!$has_messages){ ?>hidden<?php } ?>">
	<?php if($has_messages) { ?>
	<ul>
		<?php foreach($messageArray as $m){ ?>
			<li><?php echo $m ?></li>
		<?php } ?>
	</ul>
	<?php } ?>
</div>

<p>Complete and submit the following form to create a new account record. If your you already have an account record this form will also update your information if you provide a valid email and password.</p>
<form id="register_update_form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
	<fieldset>
		<legend>Registration/Update Form</legend>
		
		<ol>
			<li>
				<label for="name">Name</label>
				<input type="text" id="name" name="name" class="required" value="<?php echo stripslashes($name) ?>" maxlength="100"/> <span>[at least 4 characters]</span>
			</li>
			<li>
				<label for="email">Email</label>
				<input type="text" id="email" name="email" class="required email" value="<?php echo stripslashes($email) ?>" maxlength="100"/> <span>[at least 4 characters]</span>
			</li>
			<li>
				<label for="phone">Phone Number</label>
				<input type="text" id="phone" name="phone" class="required" value="<?php echo stripslashes($phone) ?>" maxlength="14"/> <span>[(xxx) xxx-xxxx]</span>
			</li>
			<li>
				<label for="birthdate">Birthdate</label>
				<input type="text" id="birthdate" name="birthdate" class="date required" value="<?php echo stripslashes($birthdate) ?>" maxlength="10"/> <span>[yyyy-mm-dd]</span>
			</li>
			<li>
				<label for="password">Password</label>
				<input type="password" id="password" name="password" class="required" value="" maxlength="25"/> <span>[at least 4 characters]</span>
			</li>
			<li>
				<input name="register" type="submit" value="Submit">
			</li>
		</ol>
		
	</fieldset>
</form>
<ul>
	<li>
		<a href="HW8_output.php">View DB Output</a>
	</li>
</ul>

</body>
</html>
<?php mysql_close($db_link); ?>
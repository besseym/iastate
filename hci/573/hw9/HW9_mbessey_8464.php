<?php
/*

Homework 9: Michael Bessey, March 28th 2012

HW9:
******DUE MARCH 26th BY MIDNIGHT*********

Solve the problem using PHP, HTML, JQuery, and any other necessary technologies that we have used in class:

*For the following project, you will have to use MySQL's INSERT, UPDATE, and DELETE functions

*You have been contracted by a client to build a website with the following functionality:
	**A contact form that allows website visitors to send an email message to someone at the company (Using ajax to submit and process the form is a bonus!)
	**The ability to securely log in and manage content for the website
		**Hint: To add content to a page, consider the processes used to register a new user in a user management system, add data to a database using a form, etc...
		**Hint 2: To select and update content examine the code from profile.php in the Week 11, Day 2 lecture notes
		**Hint 3: To display content specific to a certain page, you will need to SELECT * FROM yourtable WHERE ....
	**It MUST look good (relative term, I know).  This should be something that you could ACTUALLY get paid for
*****You will have to provide mockups/visual representations of the system for the 'client'
*****You will have to include an installer for the database tables associated with this project
*****No clusters of files!  If that doesn't make sense, look at the lecture notes from August 30
*****You CAN use PARTS of the secure user system, however, it is expected that you will modify it and are not simply resubmitting the code that I have provided you.  Submitting an exact version of the code sets provided for class will result in a 0 grade.


*****NOTES: All form fields MUST validate data unless they are allowed to have no value (this applies to any form field in any project/homework)
**Submit this assignment through the course website, and ensure that the filename is HW9_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW9_EMAIL_LAST4OFID.zip").
*/

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_user.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

//require "includes/constants.inc.php";
//require REAL_BASE . 'includes/db/db_constants.inc.php';
//require REAL_BASE . "includes/db/db_user.inc.php";
//require REAL_BASE . "includes/db/db_install.inc.php";
//require REAL_BASE . "includes/db/db_connect.inc.php";

require REAL_BASE . "/includes/hw/security.inc.php";
require REAL_BASE . "/includes/hw/validation.inc.php";
require REAL_BASE . "/includes/hw/messenger.inc.php";

//make the session available
session_start();

$p_index = 'p';
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

//Grab the page to display (if called)
$page = NULL;
$header = NULL;
switch($p){
	case 'home':
		$page = "home.php";
		$header = "home_header.php";
		break;
	case 'login':
		$page = "login.php";
		$header = "login_header.php";
		break;
	case 'register':
		$page = "register.php";
		$header = "register_header.php";
		break;
	case 'profile':
		$page = "profile.php";
		$header = "profile_header.php";
		break;
	case 'activate':
		$page = "activate.php";
		$header = "activate_header.php";
		break;
	case 'admin':
		$page = "admin.php";
		$header = "admin_header.php";
		break;
	case 'logout':
		logout($db_link);
		break;
	default:
		$page = "error404.php";
		$header = "error_header.php";
		break;
}

//Check to make sure the file actually exists, if no, call default
if(!file_exists("pages/" . $page)){
	$page = "error404.php";
	$header = "error_header.php";
}

$messageArray = array();

require HW_REAL_BASE . "/pages/" . $header;

$title = "User Management System";

?>
<!DOCTYPE HTML>
<html>
	<head>
		<title><?php echo $title ?></title>
		
		<link type="text/css" rel="stylesheet" media="all" href="styles/main.css" />
		<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="scripts/jquery.validate.js"></script>
		<script type="text/javascript" src="scripts/main.js"></script>
	</head>
	<body>
		<div id="main-header">
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
			<div id="nav">
				<ul>
					<li <?php if($p == 'home'){ ?>class="current-page"<?php } ?>>
						<a href="<?php echo PAGE_HOME ?>" >Home</a>
					</li>
					<?php 
					//start authenticated options
					if(is_signed_in()){ 
						$user = get_authenticated_user();
					?>
						<li <?php if($p == 'profile'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_PROFILE ?>" >Profile</a>
						</li>
						<?php if($user->is_admin()){ ?>
						<li <?php if($p == 'admin'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_ADMIN ?>" >Manage Users</a>
						</li>
					<?php } ?>
						<li class="logout">
							<a href="<?php echo PAGE_LOGOUT ?>" >Logout</a>
						</li>
						<?php } else { ?>
						<li <?php if($p == 'register'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_REGISTER ?>" >Register</a>
						</li>
						<li <?php if($p == 'login'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_LOGIN ?>" >Login</a>
						</li>
					<?php 
					}
					//end authenticated options
					?>
				</ul>
			</div>
		</div>
		<div  id="main-section">
			<?php include HW_REAL_BASE . "/pages/" . $page; ?>
		</div>
		<div id="main-footer">
		</div>
	</body>
</html>
<?php mysql_close($db_link); ?>
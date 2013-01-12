<?php
/*

Homework 10: Michael Bessey, April 16th 2012

**Homework 10: Create a dynamic PHP driven stylesheet

**You will need to:

	*1.  Create a webpage (at least 1, but preferably 2-3)
	*2.  Create a stylesheet (the extension should be .php)
	*3.  Create a constants file (refer to many prior homeworks) that defines the location of your full http:// path (i.e. define("SITE_ROOT", "http://{$_SERVER['HTTP_HOST']}/yourfolder");)
	*4.  Include your constants file within your stylesheet
		*4a.  Within your constants file, define colors, font sizes, and other frequently repeated stylesheet operator values (i.e. 000 [color black], half column [class="half column"], etc...)
	*5.  Include the stylesheet on a webpage (need to see it in action!)


**Submit this assignment through the course website, and ensure that the filename is HW10_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW10_EMAIL_LAST4OFID.zip").
*/
//END INSTRUCTIONS

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

//make the session available
session_start();

//parse the page number
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

//parse a possible time parameter
$time = null;
if(isset($_GET[TIME])){
	$time = $_GET[TIME];
}
elseif(isset($_POST[TIME])){
	$time = $_POST[TIME];
}

if('reset' == $time){
	$time = date("H:i:s");
	unset($_SESSION[TIME]);
	$_SESSION[TIME] = null;
}

if(isset($time)){
	$_SESSION[TIME] = $time;
}

if(isset($_SESSION[TIME])){
	$time = $_SESSION[TIME];
}


//Grab the page to display (if called)
$page = NULL;
$header = NULL;
$page_link = PAGE_HOME;
switch($p){
	case 'home':
		$page = "home.php";
		$header = "home_header.php";
		$page_link = PAGE_HOME;
		break;
	case 'day_and_night':
		$page = "day_and_night.php";
		$header = "day_and_night_header.php";
		$page_link = PAGE_DAY_AND_NIGHT;
		break;
	case 'night_and_day':
		$page = "night_and_day.php";
		$header = "night_and_day_header.php";
		$page_link = PAGE_NIGHT_AND_DAY;
		break;
	case 'day_and_night_1':
		$page = "day_and_night_1.php";
		$header = "day_and_night_header_1.php";
		$page_link = PAGE_DAY_AND_NIGHT_1;
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

$title = "Homework 10: Dynamic PHP Driven Stylesheet";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title><?php echo $title ?></title>
		
		<link href='http://fonts.googleapis.com/css?family=Arvo' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Coming+Soon' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" media="all" href="styles/main.css.php<?php if(isset($time)){ echo '?time=' . $time; } ?>" />
	</head>
	<body>
		<div id="wrapper">
			<div id="main-header">
				<h1><?php echo $title ?></h1>
				<h2>Poems about Night and Day</h2>
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
			</div>
			<div  id="main-section"  class="clearfix">
				<div id="main-nav" class="nav column">
					<ul>
						<li <?php if($p == 'home'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_HOME ?>" >Home</a>
						</li>
						<li <?php if($p == 'day_and_night'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_DAY_AND_NIGHT ?>" >Day and Night</a>
						</li>
						<li <?php if($p == 'night_and_day'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_NIGHT_AND_DAY ?>" >Night and Day</a>
						</li>
						<li <?php if($p == 'day_and_night_1'){ ?>class="current-page"<?php } ?>>
							<a href="<?php echo PAGE_DAY_AND_NIGHT_1 ?>" >Day and Night</a>
						</li>
					</ul>
				</div>
				<div id="main-content" class="column">
					<?php include HW_REAL_BASE . "/pages/" . $page; ?>
				</div>
				<div class="aside column">
				
					<h3>Manually Set the Time of Day</h3>
					<h4>Current Time: <?php echo $time ?></h4>
					<form>
					<ul>
						<li>
							<a href="<?php echo $page_link; ?>&time=05:00:00">Morning</a>
						</li>
						<li>
							<a href="<?php echo $page_link; ?>&time=10:00:00">Afternoon</a>
						</li>
						<li>
							<a href="<?php echo $page_link; ?>&time=16:00:00">Dusk</a>
						</li>
						<li>
							<a href="<?php echo $page_link; ?>&time=21:00:00">Night</a>
						</li>
						<li>
							<a href="<?php echo $page_link; ?>&time=reset">Reset Time</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="main-footer">
				<p>
					HCI 573X: User Interface Implementation for Web Applications
				</p>
			</div>
		</div>
		<img id="sun" class="celestial-sphere" src="<?php echo HW_SITE_BASE; ?>/images/sun.png" />
		<img id="moon" class="celestial-sphere" src="<?php echo HW_SITE_BASE; ?>/images/moon.png" />
	</body>
</html>


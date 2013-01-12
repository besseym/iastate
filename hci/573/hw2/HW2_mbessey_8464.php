<?php
/*
Homework 2: Michael Bessey, January 22 2012

**Create website framework including CSS.  Must use PHP constants, include files, and basic JavaScript actions (i.e. hide/show, fade in/out, etc...).

**You have been provided with a directory structure, the jquery library, and the start of a CSS file in their respective folders to get you started.

**Make between 2 and 4 main pages to the website, where each page should contain 'something', and this file should get you started.
**You may use part 2 of HW1 (using switch operators) as the basis for this project, however the switch() must call separate files if used

**To include your constant file:
	include 'includes/constant/yourconstantfile.php';

**To add images to pages use:
	<img src="<?php echo YOURBASEVAL; ?>/images/yourimg.jpg" alt="Description of image" />

**To add hyperlinks (be sure to link from each page to each page!):
	<a href="<?php echo YOURBASEVAL; ?>/pagename.php" alt="Title of Page">Visible Link</a>

**Zip or compress your folder, name it "HW2_EMAIL_LAST4OFID.zip", and submit through the course website.
*/

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

//set page variable with get value
$page = $_GET['page'];
//if there is no get value set page variable to default value
if(empty($page))
{
   $page = "PAGE1";
}

?>

<html>
<head>
<title>Michael Bessey Homework 2</title>
<script language="javascript" type="text/javascript" src="<?php echo HW_SITE_BASE; ?>/includes/js/jquery-1.6.2.min.js"></script>
<link href="<?php echo HW_SITE_BASE; ?>/includes/styles/style.css.php" rel="stylesheet" type="text/css">
</head>
<body>
<div id="main">
<h1>Michael Bessey Homework 2</h1>
<ul id="navigation">
	<li <?php if($page == 'PAGE1'){ echo "class=\"selected-page\""; } ?>>
		<a href="<?php echo $_SERVER['PHP_SELF'] ?>?page=PAGE1" alt="Page 1">Page 1</a>
	</li>
	<li <?php if($page == 'PAGE2'){ echo "class=\"selected-page\""; } ?>>
		<a href="<?php echo $_SERVER['PHP_SELF'] ?>?page=PAGE2" alt="Page 2">Page 2</a>
	</li>
	<li <?php if($page == 'PAGE3'){ echo "class=\"selected-page\""; } ?>>
		<a href="<?php echo $_SERVER['PHP_SELF'] ?>?page=PAGE3" alt="Page 3">Page 3</a>
	</li>
	<li <?php if($page == 'PAGE4'){ echo "class=\"selected-page\""; } ?>>
		<a href="<?php echo $_SERVER['PHP_SELF'] ?>?page=PAGE4" alt="Page 4">Page 4</a>
	</li>
</ul>

	<div id="content">
	<?php
	
	//load page based on page variable
	switch($page)
	{
	
		case "PAGE1":
		include ('includes/pages/page1.php');
		break;
		
		case "PAGE2":
		include ('includes/pages/page2.php');
		break;
		
		case "PAGE3":
		include ('includes/pages/page3.php');
		break;
		
		case "PAGE4":
		include ('includes/pages/page4.php');
		break;
		
		default:
		include ('includes/pages/page1.php');
		break;
	
	}
	?>
	</div>

</div>

</body>
</html>
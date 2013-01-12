<?php
/*

Homework 7: Michael Bessey, February 27th 2012

**Homework 7: Debug a multi-file system (identify and correct the errors).

**NOTE: THIS HOMEWORK WILL NOT FUNCTION UNTIL ALL ERRORS HAVE BEEN CORRECTED!  IF ERROR REPORTING IS NOT CURRENTLY SET TO DISPLAY ERRORS, YOU WILL NOT BE ABLE TO COMPLETE THIS HOMEWORK!

**You will need to:
	*1.  Work your way through each PHP file in any/all directories, debugging along the way.
		*1a.  This means, NO ERRORS can remain after you have completed the homework!  No undefined variables, no parse syntax errors, ZERO errors may exists.
	*2.  Keep track of ALL the errors you correct
		*2a.  Put all errors into an ordered list on THIS page (HTML output for the list is just fine)
			(ie.
			<ol>
				<li>Item 1</li>
				<li>Item 2</li>
			</ol>
			)
		*2b.  In the same ordered list (from example above), tell me HOW you fixed the errors:
			(ie. <li>Syntax error on line 44 of dbc.php: corrected by adding required semicolon to end of statement</li>)
	*3.  There are some extras (may or may not be PHP) floating about, figure out what they are, make them function properly, get an extra point

**Handy tip: Keep your eyes peeled for quotes and semicolons!  They are the MOST common errors found in ANY project.

**Submit this assignment through the course website, and ensure that the filename is HW7_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW7_EMAIL_LAST4OFID.zip").
*/
//END INSTRUCTIONS
?>
<?php
require "includes/constants/const.php";
include 'includes/constants/callback.php';
?>
<html>
<head>
<title><?php echo $title; ?></title>
<link rel="stylesheet" type="text/css" media="all" href="<?php echo SITE_BASE ?>/includes/styles/style.css" />
<script language="JavaScript" type="text/javascript" src="<?php echo SITE_BASE ?>/includes/js/jquery-1.7.1.min.js"></script>
<script language="JavaScript" type="text/javascript">
$(function()
{
	//Detect click on area
	$(".submit").click(function()
	{
		var button = $(".submit").attr("data-title");
		alert(button);
		
		var form = $("#myfirstform")
		if(form){
			form.submit();
		}
		
		return false;
	});
});
</script>
</head>
<body>
	<h1>Welcome to Homework 7!  Good Luck!</h1>
	<p><a href="<?php echo $_SERVER['PHP_SELF']; ?>?p=form1">Add the first form!</a></p>
	<?php
	if(!defined('SITE_BASE'))
	{
		echo "The site base has not been defined in dbc.php";
	}
	else
	{
		require 'Extras/hw-details.php';
	}

	if(isset($_GET['p']) && $_GET['p'] == "form1")
	{
		include 'pages/p1.inc.php';
	}
	?>

	<p>There are a number of assorted errors sprinkled throughout this, and other files in this homework folder- document the errors, and fix them!</p>

<p class="submit" data-title="I clicked a paragraph and it submitted a form for me!">Click me!</p>

<h2>Identified Errors and Fixes</h2>
<ol>
	<li>Syntax error on line 30 of HW7_EMAIL_LAST4OFID.php: corrected by replacing colon with semicolon at end of statement.</li>
	<li>Syntax error on line 58 of HW7_EMAIL_LAST4OFID.php: corrected by adding missing closing parenthesis.</li>
	<li>Syntax error on line 59 of HW7_EMAIL_LAST4OFID.php: corrected by replacing colon with semicolon at end of statement.</li>
	<li>Syntax error on line 69 of HW7_EMAIL_LAST4OFID.php: corrected by adding missing semicolon.</li>
	<li>Syntax error on line 70 of HW7_EMAIL_LAST4OFID.php: corrected by adding missing greater than symbol.</li>
	<li>Syntax error, unexpected T_FUNCTION, on line 5 of const.php: corrected by adding missing semicolon on line 3.</li>
	<li>Syntax error on line 8 of of const.php: corrected by adding missing closing parenthesis.</li>
	<li>Syntax error on line 10 of of const.php: corrected by missing semicolon on line 9.</li>
	<li>Syntax error on line 14 of of const.php: corrected by adding missing closing curly brace.</li>
	<li>Syntax error on line 17 of of const.php: corrected by replacing colon with semicolon at end of statement.</li>
	<li>PHP Warning no such file or directory on line 33 of HW7_EMAIL_LAST4OFID.php: corrected by adding '/includes' at the beginning of the path to the 'callback.php' file.</li>
	<li>PHP Notice use of undefined constant get_image on line 3 of callback.php: corrected by making the line a call to the function get_image(3) passing the constant value number 3.</li>
	<li>PHP Notice undefined variable title on line 37 of HW7_EMAIL_LAST4OFID.php: corrected by creating $title variable on line 21 of const.php.</li>
	<li>PHP Notice undefined index 'PHP-SELF' on line 55 of HW7_EMAIL_LAST4OFID.php: corrected by changing value of index to 'PHP_SELF'.</li>
	<li>PHP Notice undefined index 'p' on line 66 of HW7_EMAIL_LAST4OFID.php: corrected by changing statement from $_GET['p'] to isset($_GET['p']). </li>
	<li>Incorrect use of the define function on line 57: corrected by changing statement from defined(SITE_BASE) to defined('SITE_BASE').</li>
	<li>Syntax error on line 5 of hw-details.php: corrected by replacing single quote on line 4 with double quote.</li>
	<li>Syntax error on line 7 of hw-details.php: corrected by adding missing double quote.</li>
	<li>PHP Warning no such file or directory on line 68 of HW7_EMAIL_LAST4OFID.php: corrected by changing path of included file to be 'pages/p1.inc.php'.</li>
	<li>PHP Warning no such file or directory on line 4 of p1.inc.php: corrected by changing path of included file to be 'Forms/Entry1.inc.php'.</li>
	<li>PHP Notice undefined variable SERVER on line 4 of Entry1.inc.php: corrected by changing variable to $_SERVER.</li>
	<li>PHP Notice undefined index 'PHP-Self' on line 4 of Entry1.inc.php: corrected by changing value of index to 'PHP_SELF'.</li>
	<li>PHP Notice undefined index 'field1' on line 8 of Entry1.inc.php: corrected by changing the statement from echo $_POST['field1']; to if( isset($_POST['field1']) ) echo stripslashes($_POST['field1']); </li>
	<li>PHP Notice undefined variable POST on line 12 of Entry1.inc.php: corrected by changing variable to $_POST.</li>
	<li>PHP Notice undefined index 'field2' on line 12 of Entry1.inc.php: corrected by changing the statement from echo $_POST['field2']; to if( isset($_POST['field2']) ) echo stripslashes($_POST['field2']);</li>
	<li>The css stylesheet 'style.css' is not being included: corrected by defining a value for the constant SITE_BASE in const.php and changing the end of the href attribute on line 38 of HW7_EMAIL_LAST4OFID.php to '/includes/styles/style.css' </li>
	<li>The css stylesheet style.css contains an unnecessary closing style tag: corrected by removing style tag.</li>
	<li>The jquery javascript file 'jquery-1.6.3.min.js' is not being included: corrected by adding the file 'jquery-1.7.1.min.js' to the '/includes/js' directory and changing the end of the src attribute on line 39 of HW7_EMAIL_LAST4OFID.php to '/includes/js/jquery-1.7.1.min.js'</li>
	<li>The Javascript code was not attached to anything: corrected by adding a class attribute to the p tag on line 74 of HW7_EMAIL_LAST4OFID.php.</li>
	<li>There was not a closing php statement in files callback.php and p1.inc.php: corrected by adding closing php statement on line 6 of callback.php and line 6 of p1.inc.php.</li>
	<li>The data-title attribute of the p tag on line 74 of HW7_EMAIL_LAST4OFID.php indicates that it should submit a form when clicked: First I added an id attribute to the form on line 4 of Entry1.inc.php then I modified the in page javascript on line 49 to obtain the form and submit it if exists on the page.</li>
</ol>

</body>
</html>
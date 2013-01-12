<?php
/*
Michael Bessey, January 16 2012
Homework 1, part 2: Using the introduction pages created in class, create ONE page template that displays the introduction based on the link being clicked using PHP's switch operator.

For this exercise, we'll be using operators to determine if a value exists ("!empty [not empty], empty, isset, !isset [containing no value]) to provide a default in the event that no value is provided.

We will also be using simple if/else statements to ensure that our PHP constants are always defined (i.e. $name must always be specified, even if specified value is NULL).

Make sure to comment your work, preferably short comments using "//" or "#"

This page should:
	1. Output a default value when loaded with no variables
	2. Have a page title (within <title> tags) that corresponds to the selected link
	3. Be well commented
	
Save this file as "HW1-2_EMAIL_LAST4OFID.php" and submit it through the course website:
http://projects.vrac.iastate.edu/hci573/submit-assignments/
*/

//if name parameter exists
if(!empty($_GET['name']))
{
   $name = $_GET['name'];
}
//initialize $name if name parameter does not exist
else
{
    $name = "";
}

//determine which introduction to display
switch($name)
{

	case "PERSON1":
	$title = "Name 1 Introduction";
	$content = "<p>This is introductory content for " . $name . "</p>";
	break;
	
	case "PERSON2":
	$title = "Name 2 Introduction";
	$content = "<p>This is introductory content for " . $name . "</p>";
	break;
	
	default:
	$title = "Error- No Name Selected";
	$content = "<h2>Please select someone to continue.</h2>";
	break;

}
?>
<html>
<head>
<title><?php echo $title ?></title>
</head>
<body>
<?php

//if name is not null output $content
if(isset($name)){
echo $content;
}

echo "<p><a href=\"".$_SERVER['PHP_SELF']."?name=PERSON1\">Person 1</a><br />";
echo "<a href=\"".$_SERVER['PHP_SELF']."?name=PERSON2\">Person 2</a></p>";

?>
</body>
</html>
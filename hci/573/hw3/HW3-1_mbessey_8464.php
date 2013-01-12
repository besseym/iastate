<?php
/*
Homework 3, Part 1: Michael Bessey, January 30th 2012

1. Make an html form which corresponds to the database table created last week ("example_table").  Remember that each form must have a few key elements:
    a) Opening and closing <form></form> tags.
    b) The opening tag of the form must specify where the form is to post (i.e. "<?php echo $_SERVER['PHP_SELF']; ?>", or the name of this page), and that the form should post the values.
    c) Each form field name must correspond with the $_POST['field_name'] value at the top of the page in order for the data to submit.

2.  Connect to your database (hint: there is a missing piece to the connection script at in the includes > db.php file)
3.  Assign a PHP variable to each entry field (ex. $name = mysql_real_escape_string(GRABNAME);)
4.  Successfully insert the values from your form to the database.  Note that dates must be entered as YYYY-MM-DD values, and the ID is not necessary as the ID value is auto incrementing (will insert and update upon entry).

*************The following is the data to enter into the DB using your functioning form...*************

Bennett, 2011-09-01, hci590ii
Stephen, 2011-09-01, hci591
Michael, 2011-07-11, psych501
Janet, 2010-04-05, hci590ii
Lori, 2010-01-01, hci590ii
James, 2009-07-14, stat401
Rachel, 2011-10-21, hci590ii
Thomas, 2008-08-01, hci590ii
Elizabeth, 2011-11-01, hci590ii
Nadia, 2011-09-01, hci590ii
Douglas, 2011-09-01, hci590ii
Aiden, 2011-09-01, hci590ii
Ella, 2011-09-01, hci590ii
Genevieve, 2011-09-01, hci590ii
William, 2011-09-01, hci590ii
Kate, 2011-09-01, hci590ii
Stefan, 2010-03-09, hci574x
Stephanie, 2011-02-05, hci590ii

*************End data to enter into db using your form*************

Save your script as "HW3-1_EMAIL_LAST4OFID.php", put it into a folder named "HW3_EMAIL_LAST4OFID", then move on to HW3, part 2 (Displaying your data)
*/

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

function is_valid_date($input, $format = "Y-m-d"){

	$input = trim($input);
	$time = strtotime($input);
	$date = date($format, $time);
	
	return ($date == $input);
}

$messageArray = array();

$name = "";
$date = "";
$class = "";

$submitted = isset($_POST['add']) && $_POST['add'] == 'Submit';
if($submitted){

	$hasError = false;

    $name = $_POST['name'];
    $date = $_POST['date'];
    $class = $_POST['class'];
    
    //validate name input
    if(empty($name)){
    	$messageArray[] = "Name is a required field.";
    }
    else if(strlen($name) < 4){
    	$messageArray[] = "Name needs to be at lease 4 characters long.";
    }
    else {
    	$name = trim($name);
    }
    
    //validate date input
    if(!empty($date)){
    
    	$date = trim($date);
    
    	if(!is_valid_date($date)){
    		$messageArray[] = "You entered in an invalid date.";
    	}
    }
    
    //validate class input
    if(empty($class)){
    	$messageArray[] = "Class is a required field.";
    }
    else {
    	$class = trim($class);
    }
    
    //there were no error messages added attempt to insert record
    if(empty($messageArray)){
    
    	$name = db_string_filter($name);
    	$date = db_string_filter($date);
    	$class = db_string_filter($class);
    
    	$insert = "insert into hw3 (name, date, class) values ('$name', '$date', '$class')";
    	$result = mysql_query($insert) or die("Insertion Failed:" . mysql_error());
    	
    	if($result){
    		$messageArray[] = "Your record was successfully entered.";	
    	}
    	else {
    		$messageArray[] = "Your data was not submitted. Try again.";
    	}
    }
}

?>
<html>
<head>
	<title>Data Entry Page</title>
</head>
<body>

	<h1>Data Entry Page</h1>

	<?php if(!empty($messageArray)) { ?>
	<ul>
		<?php foreach($messageArray as $message){ ?>
			<li><?php echo $message ?></li>
		<?php } ?>
	</ul>
	<?php } ?>
	
	<?php if($submitted) { ?>
	<h2>This is the data we recieved</h2>
	<pre><?php echo print_r($_POST); ?></pre>
	<?php } ?>

	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="inputForm">
	
		<fieldset>
			<legend>Input Form</legend>
			
			<ol>
				<li>
					<label for="name">Name:</label> 
					<input type="text" id="name" name="name" value="<?php echo stripslashes($name) ?>" maxlength="220" />
				</li>
				<li>
					<label for="date">Date:</label> 
					<input type="text" id="date" name="date" value="<?php echo stripslashes($date) ?>" />
					<span>(yyyy-mm-dd)</span>
				</li>
				<li>
					<label for="class">Class:</label> 
					<input type="text" id="class" name="class" value="<?php echo stripslashes($class) ?>" maxlength="220" />
				</li>
			</ol>
		
		</fieldset>
	
		<p align="center"><input name="add" type="submit" value="Submit"></p>
	</form>
	
	<ul>
		<li>
			<a href="HW3-2_mbessey_8464.php">View DB Output</a>
		</li>
	</ul>

</body>
</html>

<?php mysql_close($db_link); ?>
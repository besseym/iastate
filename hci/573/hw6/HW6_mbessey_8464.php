<?php
/*
Homework 6: Michael Bessey, February 20th 2012

**Homework 6: Build microblog and incorporate CSS, JavaScript, PHP, and MySQL to create dynamic charts and graphs of database contents.

**You will need to:
	*1.  Create an input form using PHP and HTML
		*1a.  There must be AT LEAST 2 input fields
		*1b.  You must include a timestamp on each submitted entry
	*2.  Create a database table that corresponds with your input fields from #1
	*3.  Use PHP to create an installer
		*3a.  The installer MUST be included prior to the start of your content on the main homework page
			**For example: $doinstall = mysql_query("CREATE TABLE `your_table` IF NOT EXISTS ........;");
			**Be sure to add the table install AFTER your DB connection details/included file
	*4.  Use Ajax to synchronously insert values from #1 into your database table (without page reload)
	*5.  Use Ajax to continually call a separate page which outputs the database entries to your page
	*6.  Use GvCharts (http://www.ivellios.toron.pl/technikalia/2010/06/22/gvchart-plugin-jquery-with-google-charts/),  Google Charts (http://code.google.com/apis/chart/image/docs/making_charts.html), or other dynamic chart tool to represent (in any useful way) the contents of your database table
	*7.  Make it pretty.  Use CSS.  No inline styles please!
	*8.  OPTIONAL EXTRA CREDIT: Include dynamic ajax function to delete AND/OR edit database entries

**This form may/should be used in your course project, personal website, or anything you may actually use, so make sure that your code is clean, well documented (as always), and functions effectively

**Submit this assignment through the course website, and ensure that the filename is HW6_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW6_EMAIL_LAST4OFID.zip").
*/

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

//require 'includes/db_constants.php';
//require 'includes/db_install.php';
//require 'includes/db_connect.php';

require HW_REAL_BASE . "/includes/pages/transaction_delete.seg.php";
require HW_REAL_BASE . "/includes/pages/transaction_post.seg.php";

?>

<html>
	<head>
		<title>Financial Transaction Page</title>
		
		<link href="styles/main.css" rel="stylesheet" type="text/css">
		
		<script type="text/javascript" src="http://www.google.com/jsapi"></script>
		<script type="text/javascript" src="scripts/jquery-1.7.1.min.js" ></script>
		<script type="text/javascript" src="scripts/jquery.gvChart-1.0.1.min.js"></script>
		<script type="text/javascript">
			gvChartInit();
		</script>
		<script type="text/javascript" src="scripts/main.js"></script>
		
	</head>
	<body>
	
		<div id="main">
			<h1>Financial Transaction Page</h1>
			
			<div id="flash" class="<?php if(empty($messageArray)) { ?>hidden<?php } ?>">
			
				<?php if(!empty($messageArray)) { ?>
				<ul>
					<?php foreach($messageArray as $m){ ?>
						<li><?php echo $m ?></li>
					<?php } ?>
				</ul>
				<?php } ?>
				
				<?php if($submitted) { ?>
				<h3>This is the data we received</h3>
				<pre><?php echo print_r($_POST); ?></pre>
				<?php } ?>
			
			</div>
		
			<div id="main-top">
				<div id="main_content">
				
				<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
					<fieldset>
						<legend>Financial Transaction Form</legend>
						<ol>
							<li>
								<label for="amount">Amount:</label> 
								<input type="text" id="amount" name="amount" value="<?php echo stripslashes($amount) ?>" />
							</li>
							<li>
								<label for="category">Category:</label>
								<select id="category" name="category">
									<option value="">Select a Category</option>
									<option <?php if($category == 'bills'){ ?>selected<?php } ?> value="bills">Bills</option>
								  	<option <?php if($category == 'entertainment'){ ?>selected<?php } ?> value="entertainment">Entertainment</option>
								  	<option <?php if($category == 'education'){ ?>selected<?php } ?> value="education">Education</option>
								  	<option <?php if($category == 'food'){ ?>selected<?php } ?> value="food">Food</option>
								  	<option <?php if($category == 'health'){ ?>selected<?php } ?> value="health">Health</option>
								  	<option <?php if($category == 'travel'){ ?>selected<?php } ?> value="travel">Travel</option>
								  	<option <?php if($category == 'other'){ ?>selected<?php } ?> value="other">Other</option>
								</select>
							</li>
							<li>
								<label for="description">Description:</label> 
								<textarea type="text" id="description" name="description"><?php echo stripslashes($description) ?></textarea>
							</li>
							<li>
								<input id="submit" name="submit" type="submit" value="add">
							</li>
						</ol>
					</fieldset>
				</form>
				
				</div>
				
				<div id="summary">
				<?php include ('includes/pages/transaction_totals.seg.php'); ?>
				</div>
				
				<div class="clear"></div>
			</div>
			<h2>Transactions</h2>
			<div id="transactions">
				<?php include ('includes/pages/transaction_list.seg.php'); ?>
			</div>
		</div>
	</body>
</html>

<?php mysql_close($db_link); ?>
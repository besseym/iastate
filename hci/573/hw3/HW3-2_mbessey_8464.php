<?php
/*
Homework 3, Part 2: Michael Bessey, January 30th 2012

Using a mysql_query in conjunction with a while($row = mysql_fetch_assoc(yourquery)) loop, output the contents of your database.
For each task below, ensure that you output only one record per line.

******SAVE YOUR QUERIES!!! YOU WILL NEED TO SHOW YOUR WORK.  WHEN COMPLETE WITH EACH QUERY, "//" BEFORE THE QUERY TO COMMENT IT OUT******

You will have to...

1.  Connect to your database (hint: still a missing piece to this puzzle!).
2.  Use a SELECT query to query all of the information in the table ('example_table').
3.  Select ONLY "michael" and "janet" using MySQL's WHERE clause (select both michael AND janet in the same query)
4.  Select records that are LIKE '%ste%'
5.  Select records that are LIKE '%ste%' or equal to "James"
6.  Perform a query that orders the results by date- newest to oldest

Please ensure that the information when output is legible (include spaces and line breaks where appropriate).

Copy all of your outputs into a text file, save it as "HW3_EMAIL_LAST4OFID_output.txt", and add it to your folder (HW3_EMAIL_LAST4OFID).

Then, save your script as "HW3-2_EMAIL_LAST4OFID.php", zip it into your folder (HW3_EMAIL_LAST4OFID) with part 1, and submit through the course website.
*/

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

//require 'includes/install.php';
//require 'includes/install_populate.php';
//require 'includes/db.php';

//queries
$sql = "SELECT * FROM hw3";
//$sql = "SELECT * FROM hw3_mbessey where (lower(name) = 'michael' or lower(name) = 'janet')";
//$sql = "SELECT * FROM hw3_mbessey where lower(name) like '%ste%'";
//$sql = "SELECT * FROM hw3_mbessey where (lower(name) like '%ste%' or name = 'James')";
//$sql = "SELECT * FROM hw3_mbessey order by date desc";

//Grab the data
$resultList = mysql_query($sql) or die(mysql_error());
?>

<html>
	<head>
		<title></title>
		<style type="text/css">
		
		table {
			border-collapse: collapse;
		}
		
		table th {
			border-bottom: 1px solid silver;
		}
		
		table th, td {
			padding: 5px 25px;
		}
		
		</style>
	</head>
	<body>
		<h1>Data Output Page</h1>
		<table>
			<caption>Query Results</caption>
			<tr>
				<th>Id</th><th>Name</th><th>Date</th><th>Class</th>
			</tr>
			<?php if(mysql_num_rows($resultList) > 0){  
				while($row = mysql_fetch_assoc($resultList)){ ?>
				<tr>
					<td><?php echo $row['id'] ?></td>
					<td><?php echo $row['name'] ?></td>
					<td><?php echo $row['date'] ?></td>
					<td><?php echo $row['class'] ?></td>
				</tr>
			<?php }
			 } else { ?>
			<tr>
				<td colspan="4">No Results</td>
			</tr>
			<?php } ?>
		</table>
		<p>
			<b>Query:</b> <?php echo $sql; ?></p>
		</p>
		<ul>
			<li>
				<a href="HW3-1_mbessey_8464.php">Enter Data</a>
			</li>
		</ul>
		
	</body>
</html>

<?php mysql_close($db_link); ?>
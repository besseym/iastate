<?php

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

//select all records from the table to output in the table below
$sql = "select * from hw8";
$resultList = mysql_query($sql) or die(mysql_error());

$title = "Homework 8: Michael Bessey Output, March 10th 2012";

?>
<html>
<head>
	<title><?php echo $title ?></title>
	
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
	<h1><?php echo $title ?></h1>
	<table>
		<caption>Query Results</caption>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Phone</th>
			<th>Birthdate</th>
			<th>Password</th>
			<th>Created At</th>
			<th>Updated At</th>
		</tr>
		<?php if(mysql_num_rows($resultList) > 0){  
			while($row = mysql_fetch_assoc($resultList)){ ?>
			<tr>
				<td><?php echo $row['id'] ?></td>
				<td><?php echo $row['name'] ?></td>
				<td><?php echo $row['email'] ?></td>
				<td><?php echo $row['phone'] ?></td>
				<td><?php echo $row['birthdate'] ?></td>
				<td><?php echo $row['password'] ?></td>
				<td><?php echo $row['created_at'] ?></td>
				<td><?php echo $row['updated_at'] ?></td>
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
			<a href="HW8_mbessey_8464.php">Enter Registration</a>
		</li>
	</ul>
</body>
</html>

<?php mysql_close($db_link); ?>
<?php

require_once REAL_BASE . '/includes/hw/db_constants.inc.php';
require_once HW_REAL_BASE . '/includes/db_constants.inc.php';
require_once REAL_BASE . '/includes/hw/db_helper.inc.php';

//connect to database
$db_link = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());

$table_sql = 
"CREATE TABLE `" . DB_TABLE . "` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(220) DEFAULT NULL,
`date` date DEFAULT '0000-00-00',
`class` varchar(220) DEFAULT NULL,
`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";

//create the database if it doesn't already exist
create_database ($db_link, DB_DATABASE);

//create the table if it doesn't already exist
create_table($db_link, DB_DATABASE, DB_TABLE, $table_sql);

//only populate the table if empty
$count = query_row_count(DB_TABLE);
if($count == 0){

	//remove data from table
	//mysql_query("DELETE FROM " . $tableName, $link) or die(mysql_error());
	
	$insertQuery = 
	"INSERT INTO " . $tableName . " (`name`, `date`, `class`) 
	VALUES 
	('Bennett', '2011-09-01', 'hci590ii'), 
	('Stephen', '2011-09-01', 'hci591'),
	('Michael', '2011-07-11', 'psych501'),
	('Janet', '2010-04-05', 'hci590ii'),
	('Lori', '2010-01-01', 'hci590ii'),
	('James', '2009-07-14', 'stat401'),
	('Rachel', '2011-10-21', 'hci590ii'),
	('Thomas', '2008-08-01', 'hci590ii'),
	('Elizabeth', '2011-11-01', 'hci590ii'),
	('Nadia', '2011-09-01', 'hci590ii'),
	('Douglas', '2011-09-01', 'hci590ii'),
	('Aiden', '2011-09-01', 'hci590ii'),
	('Ella', '2011-09-01', 'hci590ii'),
	('Genevieve', '2011-09-01', 'hci590ii'),
	('William', '2011-09-01', 'hci590ii'),
	('Kate', '2011-09-01', 'hci590ii'),
	('Stefan', '2010-03-09', 'hci574x'),
	('Stephanie', '2011-02-05', 'hci590ii')";
	
	//populate table with data
	mysql_query($insertQuery, $link) or die(mysql_error());
	
	echo "Table now populated.";
}

//close link to the database
mysql_close($link);

?>
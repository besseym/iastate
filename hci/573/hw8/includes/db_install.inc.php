<?php

require_once REAL_BASE . '/includes/hw/db_constants.inc.php';
require_once HW_REAL_BASE . '/includes/db_constants.inc.php';
require_once REAL_BASE . '/includes/hw/db_helper.inc.php';

//connect to database
$db_link = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());

//db and table sql to create
$table_sql = 
"CREATE TABLE `" . DB_TABLE . "` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(100) NOT NULL,
`email` varchar(100) NOT NULL,
`password` VARCHAR(100) NOT NULL,
`birthdate` date DEFAULT '0000-00-00',
`phone` VARCHAR(10) NOT NULL,
`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` timestamp NULL,
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";

//create the database if it doesn't already exist
create_database ($db_link, DB_DATABASE);

//create the table if it doesn't already exist
create_table($db_link, DB_DATABASE, DB_TABLE, $table_sql);

mysql_close($db_link);

?>
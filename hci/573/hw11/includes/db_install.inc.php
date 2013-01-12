<?php

require_once REAL_BASE . '/includes/hw/db_constants.inc.php';
require_once HW_REAL_BASE . '/includes/db_constants.inc.php';
require_once REAL_BASE . '/includes/hw/db_helper.inc.php';
require_once HW_REAL_BASE . '/includes/db_image.inc.php';

//connect to database
$db_link = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());

//db and table sql to create
$table_sql = 
"CREATE TABLE `" . DB_TABLE . "` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(100) NOT NULL,
`width` int(5) unsigned NOT NULL DEFAULT 0,
`height` int(5) unsigned NOT NULL DEFAULT 0,
`extension` varchar(10) NULL,
`thumb_width` int(5) unsigned NOT NULL DEFAULT 0,
`thumb_height` int(5) unsigned NOT NULL DEFAULT 0,
`thumb_extension` varchar(10) NULL,
`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";

//create the database if it doesn't already exist
create_database ($db_link, DB_DATABASE);

//create the table if it doesn't already exist
create_table($db_link, DB_DATABASE, DB_TABLE, $table_sql);

mysql_close($db_link);

?>
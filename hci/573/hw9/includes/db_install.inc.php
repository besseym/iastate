<?php

require_once REAL_BASE . '/includes/hw/db_constants.inc.php';
require_once HW_REAL_BASE . '/includes/db_constants.inc.php';
require_once REAL_BASE . '/includes/hw/db_helper.inc.php';
require_once HW_REAL_BASE . '/includes/db_user.inc.php';

//connect to database
$db_link = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());

//db and table sql to create
$table_sql = 
"CREATE TABLE `" . DB_USERS_TABLE . "` (
`id` bigint(20) NOT NULL AUTO_INCREMENT,
`md5_id` varchar(200) NOT NULL DEFAULT '',
`full_name` longblob,
`user_name` varchar(200) NOT NULL DEFAULT '',
`usr_email` longblob,
`user_level` tinyint(4) NOT NULL DEFAULT '1',
`usr_pwd` varchar(220) NOT NULL DEFAULT '',
`date` date NOT NULL DEFAULT '0000-00-00',
`users_ip` varchar(200) NOT NULL DEFAULT '',
`approved` int(1) NOT NULL DEFAULT '0',
`activation_code` int(10) NOT NULL DEFAULT '0',
`ckey` varchar(220) NOT NULL DEFAULT '',
`ctime` varchar(220) NOT NULL DEFAULT '',
`num_logins` int(11) NOT NULL DEFAULT '0',
`last_login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;";

//create the database if it doesn't already exist
create_database ($db_link, DB_DATABASE);

//create the table if it doesn't already exist
create_table($db_link, DB_DATABASE, DB_USERS_TABLE, $table_sql);

$admin_username = "admin";
$admin_email = "admin@mail.com";
if(!does_user_exist($db_link, $admin_username, $admin_email)){

	$admin = new Admin;
	$admin->name = "administrator";
	$admin->username = $admin_username;
	$admin->email = $admin_email;
	$admin->password = "admin";
	$admin->ip_address = $_SERVER['REMOTE_ADDR'];
	
	if(insert_user($db_link, $admin)){
		error_log("DB INSTALL: created administrator account");
	}
	else {
		error_log("DB INSTALL ERROR: unable to create admin account");
	}
}
else{
	error_log("DB INSTALL: administrator account already exists");
}

mysql_close($db_link);

?>
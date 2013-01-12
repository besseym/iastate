<?php

require_once REAL_BASE . '/includes/hw/db_helper.inc.php';
require_once HW_REAL_BASE . '/includes/model/m_user.inc.php';
require_once HW_REAL_BASE . '/includes/model/m_admin.inc.php';

static $salt = '$2a$07$secrethw9systpasswardsalt$';

function insert_user($db_link, $user){

	global $salt;

	$name = db_string_filter($user->name);
	$username = db_string_filter($user->username);
	$email = db_string_filter($user->email);
	$level = $user->level;
	$password = db_string_filter($user->password);
	$date = date('Y-m-d');
	$ip_address = $user->ip_address;
	$approved = $user->approved;
	$activation_code = $user->activation_code;
	
	$encrypted_password = crypt($password, $salt);
	
	$insert_sql = "insert into " . DB_USERS_TABLE . " (full_name, user_name, usr_email, user_level, usr_pwd, date, users_ip, approved, activation_code) values ('$name', '$username', AES_ENCRYPT('$email', '$salt'), '$level', '$encrypted_password', '$date', '$ip_address', '$approved', '$activation_code')";
	
	return mysql_query($insert_sql, $db_link) or die(mysql_error());
}

function update_user($db_link, $user){

	global $salt;

	$id = $user->id;
	$name = db_string_filter($user->name);
	$username = db_string_filter($user->username);
	$email = db_string_filter($user->email);
	$password = db_string_filter($user->password);
	
	$update_sql = "update " . DB_USERS_TABLE . " set full_name = '$name', user_name = '$username', usr_email = AES_ENCRYPT('$email', '$salt')";
	
	if(isset($password) && !empty($password)){
		$encrypted_password = crypt($password, $salt);
		$update_sql .= ", usr_pwd = '$encrypted_password'";
	}
	
	$update_sql .= " where id = '$id'";
	
	return mysql_query($update_sql, $db_link) or die(mysql_error());
}

function get_user_approval($db_link, $username, $email, $password){

	global $salt;

	$approved = null;
	
	$username = db_string_filter($username);
	$email = db_string_filter($email);
	$password = db_string_filter($password);
	
	$encrypted_password = crypt($password, $salt);
	
	$select_sql = "select approved from " . DB_USERS_TABLE . " where (user_name = '$username' or usr_email = AES_ENCRYPT('$email', '$salt')) and usr_pwd = '$encrypted_password'";

	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
		list($approved) = mysql_fetch_row($result_set);
	}
	
	return $approved;
}

function authenticate_user($db_link, $username, $email, $password){

	global $salt;

	$user = null;
	
	$username = db_string_filter($username);
	$email = db_string_filter($email);
	$password = db_string_filter($password);
	
	$encrypted_password = crypt($password, $salt);
	
	$select_sql = "select id, md5_id, full_name, user_name, AES_DECRYPT(usr_email, '$salt') as usr_email, user_level, date, users_ip, approved, activation_code, ckey, ctime, num_logins, last_login from " . DB_USERS_TABLE . " where (user_name = '$username' or usr_email = AES_ENCRYPT('$email', '$salt')) and usr_pwd='$encrypted_password' and approved = 1";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	
	if(mysql_num_rows($result_set) > 0){
		$result = mysql_fetch_assoc($result_set);
		
		$level = $result['user_level'];
		if($level < ADMIN_LEVEL){
			$user = new User;
		} else {
			$user = new Admin;
		}
		
		$user->populate($result);
	}
	
	return $user;
}

function find_all_users($db_link){

	global $salt;

	$user = NULL;
	$user_array = array();
	
	$admin_level = ADMIN_LEVEL;
	
	$select_sql = "select id, md5_id, full_name, user_name, AES_DECRYPT(usr_email, '$salt') as usr_email, user_level, date, users_ip, approved, activation_code, ckey, ctime, num_logins, last_login from " . DB_USERS_TABLE . " where user_level < '$admin_level'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
		while($result = mysql_fetch_assoc($result_set)){
			$user = new User;
			$user->populate($result);
			$user_array[] = $user;
		}
	}
	
	return $user_array;
}

function does_user_exist($db_link, $username, $email){

	global $salt;
	
	$username = db_string_filter($username);
	$email = db_string_filter($email);
	
	$select_sql = "select id from " . DB_USERS_TABLE . " where user_name = '$username' or usr_email = AES_ENCRYPT('$email', '$salt')";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	
	return (mysql_num_rows($result_set) > 0);

}

function is_email_being_used($db_link, $id, $email){

	global $salt;
	
	$id = db_string_filter($id);
	$email = db_string_filter($email);
	
	$select_sql = "select id from " . DB_USERS_TABLE . " where usr_email = AES_ENCRYPT('$email', '$salt') and id != '$id'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	
	return (mysql_num_rows($result_set) > 0);

}

function is_username_being_used($db_link, $id, $username){

	global $salt;
	
	$id = db_string_filter($id);
	$username = db_string_filter($username);
	
	$select_sql = "select id from " . DB_USERS_TABLE . " where user_name = '$username' and id != '$id'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	
	return (mysql_num_rows($result_set) > 0);

}

function does_db_user_match_session_user($db_link, $user){

	$does_match = false;
	
	$id = db_string_filter($user->id);
	$select_sql = "select ckey, ctime from " . DB_USERS_TABLE . " where id = '$id'";

	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
	
		$ckey = null;
		$ctime = null;
		list($ckey, $ctime) = mysql_fetch_row($result_set);
		
		if($user->c_key == $ckey && $user->c_time == $ctime){
			$does_match = true;
		}
	}
	
	return $does_match;
}

function update_users_md5_id($db_link, $user){

	$id = db_string_filter($user->id);
	
	if($user->md5_id == null){
		$user->generate_md5_id();
	}
	
	$md5_id = $user->md5_id;

	$update_sql = "update " . DB_USERS_TABLE . " set md5_id = '$md5_id' where id = '$id'";
	
	return mysql_query($update_sql, $db_link) or die(mysql_error());
}

function update_user_session_info($db_link, $user){

	$id = db_string_filter($user->id);
	$key = db_string_filter($user->c_key);
	$stamp = db_string_filter($user->c_time);

	$update_sql = "update " . DB_USERS_TABLE . " set ckey = '$key', ctime = '$stamp', num_logins = num_logins + 1, last_login = now() where id = '$id'";
	return mysql_query($update_sql, $db_link) or die(mysql_error());
}

function clear_user_session_info($db_link, $id){

	$key = '';
	$stamp = '';

	$update_sql = "update " . DB_USERS_TABLE . " set ckey = '$key', ctime = '$stamp' where id = '$id'";
	return mysql_query($update_sql, $db_link) or die(mysql_error());
}

function activate_user_by_id($db_link, $user_id, $activation_code){

	$is_active = false;
	
	$user_id = db_string_filter($user_id);
	$activation_code = db_string_filter($activation_code);

	$select_sql = "select id from " . DB_USERS_TABLE . " where md5_id='$user_id' and activation_code='$activation_code'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
	
		//user exists with given activation code
		$id = null;
		list($id) = mysql_fetch_row($result_set);
		
		$update_sql = "update " . DB_USERS_TABLE . " set approved = 1 where id = '$id'";
		if(mysql_query($update_sql, $db_link) or die(mysql_error()) == 1){
			$is_active = true;
		}
	}
	
	return $is_active;
}

function activate_user_by_email($db_link, $email, $activation_code){

	global $salt;
	
	$is_active = false;
	
	$email = db_string_filter($email);
	$activation_code = db_string_filter($activation_code);

	$select_sql = "select id from " . DB_USERS_TABLE . " where usr_email = AES_ENCRYPT('$email', '$salt') and activation_code='$activation_code'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
	
		//user exists with given activation code
		$id = null;
		list($id) = mysql_fetch_row($result_set);
		
		$update_sql = "update " . DB_USERS_TABLE . " set approved = 1 where id = '$id'";
		if(mysql_query($update_sql, $db_link) or die(mysql_error()) == 1){
			$is_active = true;
		}
	}
	
	return $is_active;
}

function delete_user($db_link, $id){
	
	$id = db_string_filter($id);
	$delete_sql = "delete from " . DB_USERS_TABLE . " where id = '$id' limit 1";
	
	return mysql_query($delete_sql) or die(mysql_error());
}

?>
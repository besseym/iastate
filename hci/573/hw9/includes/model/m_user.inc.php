<?php

class User {
	
	public $id;
	public $md5_id;
	public $name;
	public $username;
	public $email;
	public $level;
	public $password;
	public $date;
	public $ip_address;
	public $approved;
	public $activation_code;
	public $c_key;
	public $c_time;
	public $num_logins;
	public $last_login;
	
	public function __construct(){
	
		$this->level = USER_LEVEL;
		$this->approved = 0;
	}
	
	public function is_admin() {
		return ($this->level >= 5);
	}
	
	public function generate_md5_id(){
		$this->md5_id = md5($this->id);
	}
	
	public function generate_activation_code(){
		$this->activation_code = rand(1000,9999);
	}
	
	public function populate($db_result){
	
		$this->id = $db_result['id'];
		$this->md5_id = $db_result['md5_id'];
		$this->name = $db_result['full_name'];
		$this->username = $db_result['user_name'];
		$this->email = $db_result['usr_email'];
		$this->level = $db_result['user_level'];
		$this->date = $db_result['date'];
		$this->ip_address = $db_result['users_ip'];
		$this->approved = $db_result['approved'];
		$this->activation_code = $db_result['activation_code'];
		$this->c_key = $db_result['ckey'];
		$this->c_time = $db_result['ctime'];
		$this->num_logins = $db_result['num_logins'];
		$this->last_login = $db_result['last_login'];
	}
	
	public function __toString(){
		return $this->id . ' ' . $this->name . ' ' . $this->username . ' ' . $this->email;
	}
}

?>
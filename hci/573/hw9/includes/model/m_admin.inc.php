<?php

require_once HW_REAL_BASE . '/includes/model/m_user.inc.php';

class Admin extends User {

	public function __construct(){
	
		$this->level = ADMIN_LEVEL;
		$this->approved = 1;
	}

}

?>
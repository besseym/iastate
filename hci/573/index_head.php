<?php 

require REAL_BASE_HCI_573 . "includes/constants.inc.php";

//parse the page
$c = parse_parameter('c');

//Determine the page to display
$page_unknown = false;
$class_page = null;
$class_head = null;
$class_page_link = null;

switch($c){
	case 'home':
		$class_page = PAGE_CLASS_HOME;
		break;
	default:
		$page_unknown = true;
		break;
}

//Check to make sure the file actually exists, if no, call default
if(!file_exists($class_page) || $page_unknown){
	$class_page = PAGE_ERROR_404;
}

if(isset($class_head)){
require $class_head;
}

?>
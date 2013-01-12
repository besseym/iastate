<?php 

require REAL_BASE_HCI_596 . "includes/constants.inc.php";

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
	case 'philosophy':
		$class_page = PAGE_PHILOSOPHY;
		$class_head = PAGE_PHILOSOPHY_HEAD;
		$class_page_link = LINK_PHILOSOPHY;
		break;
	case 'persona':
		$class_page = PAGE_PERSONA;
		$class_head = PAGE_PERSONA_HEAD;
		$class_page_link = LINK_PERSONA;
		break;
	case 'storyboard':
		$class_page = PAGE_STORYBOARD;
		$class_head = PAGE_STORYBOARD_HEAD;
		$class_page_link = LINK_STORYBOARD;
		break;
	case 'prototype':
		$class_page = PAGE_PROTOTYPE;
		$class_head = PAGE_PROTOTYPE_HEAD;
		$class_page_link = LINK_PROTOTYPE;
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
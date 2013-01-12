<?php


require "../includes/constants.inc.php";
require REAL_BASE . 'includes/db/db_image.inc.php';
require REAL_BASE . 'includes/util/util_image.inc.php';

function get_image(){
	
	$title = "Gallery Image 1";
	$path = REAL_BASE . "gallery/image/1.jpg";
	$image = new Image($title, $path);
	
	return $image;
}

function test_insert_image(){
	
}

function test_convert_to_thumb(){

	$target_size = 72;
	$src_path = REAL_BASE . "gallery/image/1.jpg";
	$dest_path = REAL_BASE . "gallery/thumb/1.jpg";
	
	//resize_image($src_path, $dest_path, $target_size, $target_size);
}

// Content type
//header('Content-Type: image/jpeg');

test_convert_to_thumb();
echo "done";


//$image = get_image();
//var_dump($image);

?>
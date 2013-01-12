<?php

function create_image_by_type($img_path){

	$image = null;

	$type = exif_imagetype($img_path);
	
	switch($type){
		case IMAGETYPE_GIF:
			$image = imagecreatefromgif($img_path);
			break;
		case IMAGETYPE_JPEG:
			$image = imagecreatefromjpeg($img_path);
			break;
		case IMAGETYPE_PNG:
			$image = imagecreatefrompng($img_path);
			break;
		default:
			break;
	}
	
	return $image;
}

function output_image_to_type($image, $dest_path, $dest_image_type, $quality = 100){

	$success = false;
	
	switch($dest_image_type){
		case IMAGETYPE_GIF:
			$success = imagegif($image, $dest_path, $quality);
			break;
		case IMAGETYPE_JPEG:
			$success = imagejpeg($image, $dest_path, $quality);
			break;
		case IMAGETYPE_PNG:
			$success = imagepng($image, $dest_path, $quality);
			break;
		default:
			break;
	}
	
	return $success;
}

function resize_image($src_path, $dest_path, $new_width, $new_height){
	
	// Get new dimensions
	list($width, $height) = getimagesize($src_path);
	
	$dest_image_type = exif_imagetype($src_path);
	
	// Resample
	$dst_image = imagecreatetruecolor($new_width, $new_height);
	$src_image = create_image_by_type($src_path);
	$success = imagecopyresampled($dst_image, $src_image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
	
	// Output
	return (output_image_to_type($dst_image, $dest_path, $dest_image_type) && $success);
}

?>
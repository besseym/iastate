<?php

require_once HW_REAL_BASE . "/includes/model/m_image.inc.php";

function is_gallery_empty($db_link){
	
	$select_sql = "select id from " . DB_TABLE;
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	
	return (mysql_num_rows($result_set) > 0);

}

function find_all_images($db_link){
	
	$image = null;
	$image_array = array();
	
	$select_sql = "select * from " . DB_TABLE . " order by id";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
		while($db_result = mysql_fetch_assoc($result_set)){
			$image = new Image($db_result['title']);
			$image->populate($db_result);
			$image_array[] = $image;
		}
	}
	
	return $image_array;
}

function create_image($db_link, $image){

	$title = db_string_filter($image->title);
	$width = $image->width;
	$height = $image->height;
	$extension = $image->extension;
	$thumb_width = $image->thumb_width;
	$thumb_height = $image->thumb_height;
	$thumb_extension = $image->thumb_extension;
	
	$insert_sql = "insert into " . DB_TABLE . " (title, width, height, extension, thumb_width, thumb_height, thumb_extension) values ('$title', '$width', '$height', '$extension', '$thumb_width', '$thumb_height', '$thumb_extension')";
	
	return mysql_query($insert_sql) or die(mysql_error());
}

function get_image($db_link, $id){
	
	$image = null;
	
	$select_sql = "select * from " . DB_TABLE . " where id='$id'";
	
	$result_set = mysql_query($select_sql, $db_link) or die(mysql_error());
	if(mysql_num_rows($result_set) > 0){
	
		$db_result = mysql_fetch_assoc($result_set);
		$image = new Image($db_result['title']);
		$image->populate($db_result);
	}
	
	return $image;
}

function update_image($db_link, $image){

	$id = $image->id;
	$title = db_string_filter($image->title);
	$width = $image->width;
	$height = $image->height;
	$extension = $image->extension;
	$thumb_width = $image->thumb_width;
	$thumb_height = $image->thumb_height;
	$thumb_extension = $image->thumb_extension;
	
	$update_sql = "update " . DB_TABLE . " set title='$title', width='$width', height='$height', extension='$extension', thumb_width='$thumb_width', thumb_height='$thumb_height', thumb_extension='$thumb_extension' where id='$id'";
	
	return mysql_query($update_sql) or die(mysql_error());
}

function delete_image($db_link, $id){
	
	$id = db_string_filter($id);
	$delete_sql = "delete from " . DB_TABLE . " where id = '$id' limit 1";
	
	return mysql_query($delete_sql) or die(mysql_error());
}

?>
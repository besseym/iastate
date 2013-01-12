<?php

require_once HW_REAL_BASE . '/includes/util/util_file_system.inc.php';

class Image {

	public $id;
	public $title;
	
	public $width;
	public $height;
	public $extension;
	
	public $thumb_width;
	public $thumb_height;
	public $thumb_extension;
	
	public $created_at;
	
	public function __construct($title){
		
		$this->id = null;
		$this->title = $title;
		
		$this->width = 0;
		$this->height = 0;
		
		$this->thumb_width = 0;
		$this->thumb_height = 0;
		
		$this->created_at = null;
	}
	
	public function get_path(){
		return GALLERY_IMAGE_SITE_PATH . $this->id . '.' . $this->extension;
	}
	
	public function get_thumb_path(){
		return GALLERY_THUMB_SITE_PATH . $this->id . '.' . $this->thumb_extension;
	}
	
	public function get_file_path(){
		return GALLERY_IMAGE_FILE_PATH . $this->id . '.' . $this->extension;
	}
	
	public function get_thumb_file_path(){
		return GALLERY_THUMB_FILE_PATH . $this->id . '.' . $this->thumb_extension;
	}
	
	public function set_image_path($path){
	
		list($width, $height) = getimagesize($path);
		
		$this->width = $width;
		$this->height = $height;
		$this->extension = pathinfo($path, PATHINFO_EXTENSION);
	}
	
	public function set_thumb_path($thumb_path){
	
		list($thumb_width, $thumb_height) = getimagesize($thumb_path);
		
		$this->thumb_width = $thumb_width;
		$this->thumb_height = $thumb_height;
		$this->thumb_extension = pathinfo($thumb_path, PATHINFO_EXTENSION);
	}
	
	public function populate($db_result){
	
		$this->id = $db_result['id'];
		$this->title = $db_result['title'];
		
		$this->width = $db_result['width'];
		$this->height = $db_result['height'];
		$this->extension = $db_result['extension'];
		
		$this->thumb_width = $db_result['thumb_width'];
		$this->thumb_height = $db_result['thumb_height'];
		$this->thumb_extension = $db_result['thumb_extension'];
		
		$this->created_at = $db_result['created_at'];
	}
	
	public function remove(){
	
		$success = delete_file($this->get_file_path());
		if($success){
			$success = delete_file($this->get_thumb_file_path());
		}
		
		return $success;
	}
}

?>
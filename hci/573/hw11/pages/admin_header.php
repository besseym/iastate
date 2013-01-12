<?php

$image_title = "";

//check if image delete action is called
if(isset($_GET['action']) && $_GET['action'] == "delete" && isset($_GET['id'])){
	
	$success = false;
	
	$id = $_GET['id'];
	$image = get_image($db_link, $id);
	if($image != null){
	
		$success = delete_image($db_link, $id);
		if($success){
			$image->remove();
			if($success){
				$messageArray[] = "Successfully deleted image with id " . $id;
			}
		}
	}
	
	if(!$success){
		$messageArray[] = "Unable to delete image with id " . $id;
	}
}

//check if form has been submitted
$submitted = isset($_POST['image-upload-submit']) && $_POST['image-upload-submit'] == 'Submit Image Upload';
if($submitted){

	//trim extra space and assign form inputs to variables
	$image_title = trim($_POST['image-title']);
	
	//validate name
	if(!is_valid_length($image_title, 3)){
		$messageArray[] = "Your image title must be at least 3 characters in length.";
	}
	
	//there were no error messages added, attempt to register user
	if(empty($messageArray)){
	
		if(isset($_FILES['image-file']) && $_FILES["image-file"]["name"]){
		
			$image = new Image($image_title);
			$success = create_image($db_link, $image);
			
			if($success){
				$id = mysql_insert_id($db_link);
				$image->id = $id;
		
			    //Upload image
			    $tmp_name = $_FILES['image-file']["tmp_name"];
			    $img_name = $_FILES['image-file']["name"];
			    
			    $extension = pathinfo($img_name, PATHINFO_EXTENSION);
			    $image_path = GALLERY_IMAGE_FILE_PATH . $id . '.' . $extension;
			    $thumb_path = GALLERY_THUMB_FILE_PATH . $id . '.' . $extension;
			 
			    $success = move_uploaded_file($tmp_name, $image_path);
			    if($success){
			    
			    	//create thumbnail
			    	$success = resize_image($image_path, $thumb_path, GALLERY_THUMB_SIZE, GALLERY_THUMB_SIZE);
			    	if($success){
			    	
			    		$image->set_image_path($image_path);
			    		$image->set_thumb_path($thumb_path);
			    		
			    		$success = update_image($db_link, $image);
			    		if($success){
			    			$messageArray[] = "Successfully uploaded image " . $img_name . " with title " . $image_title;
			    		}
			    	}
			    }
		    }
		    
		    if(!$success){
		    	delete_image($db_link, $id);
		    	$messageArray[] = "An error occurred while uploading " . $img_name . ". Please try again later.";
		    }
		}
		else {
			$messageArray[] = "You need to choose an image to upload.";
		}
	}
	
}

//find all the images in the gallery
$image_array = find_all_images($db_link);

?>
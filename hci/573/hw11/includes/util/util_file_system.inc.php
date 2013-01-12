<?php

function dir_tree($path = '.'){

	$file_array = array();
	
	if (is_dir($path)) {
	
	    if ($dh = opendir($path)) {
	    
	    	$count = 0;
	        while (($file = readdir($dh)) !== false) {
	        
	        	if(!preg_match('/^\./',$file)){
	        	
		       		$file_path = "$path/$file";
		        
		        	if(is_file($file_path)){
		        		$file_array[] = $file_path;
		        	}
		        	else if(is_dir($file_path)){
		        	
		        		$sub_file_array = dir_tree($file_path);
		        		for ($i = 0; $i < sizeof($sub_file_array); $i++) {
		        			$file_array[] = $sub_file_array[$i];
		        		}
		        	}
		        	
		        }
	        }
	        
	        closedir($dh);
	    }
	}
	
	return $file_array;        
}

function delete_file($file_path){
	
	$success = file_exists($file_path);
	if($success){
	
		$success = chmod($file_path, 0777);
		if($success){
			$success = unlink($file_path);
		}
	}
	
	return $success;
}

?>
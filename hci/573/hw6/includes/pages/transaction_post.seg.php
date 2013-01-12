<?php

$amount = "";
$category = "";
$description = "";

$submitted = isset($_POST['submit']) && $_POST['submit'] == 'add';
if($submitted){

	$hasError = false;
	
	$amount = trim($_POST['amount']);
	$category = trim($_POST['category']);
	$description = trim($_POST['description']);
	
	//validate amount input
	if(empty($amount)){
		$messageArray[] = "Amount is a required field.";
	}
	else if(!is_numeric($amount)){
		$messageArray[] = "Amount needs to be a numeric value.";
	}
	
	//validate category input
	if(empty($category)){
		$messageArray[] = "Category is a required field.";
	}
	
	if(strlen($description) > 250){
		$messageArray[] = "Description needs to be less than 250 characters long.";
	}
	
	//there were no error messages added attempt to insert record
	if(empty($messageArray)){
	
		$amount = db_string_filter($amount);
		$category = db_string_filter($category);
		$description = db_string_filter($description);
	
		$insert = "insert into hw6 (amount, category, description) values ('$amount', '$category', '$description')";
		$result = mysql_query($insert) or die("Insertion Failed:" . mysql_error());
		
		if($result){
			$messageArray[] = "Your transaction was successfully posted.";	
		}
		else {
			$messageArray[] = "An error occurred while saving your transaction. Please try again.";
		}
	}
}

?>
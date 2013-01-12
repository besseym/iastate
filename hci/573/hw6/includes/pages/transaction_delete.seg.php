<?php

$result = false;

if(isset($_GET['action'])){
	if($_GET['action'] == 'DELETE'){
		$transaction_id = $_GET['id'];
		if(is_numeric($transaction_id)){
		
			$delete = "delete from hw6 where id = " . db_string_filter($transaction_id);
			$result = mysql_query($delete) or die("Deletion Failed:" . mysql_error());
		}
	}
}

?>
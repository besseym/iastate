<?php 
	$transaction_query = "select * from hw6 order by created_at desc";
	$transaction_list = mysql_query($transaction_query) or die(mysql_error());
?>
<table>
<tr>
	<th>Category</th><th>Amount</th><th>Time</th><th>Description</th><th></th>
</tr>
<?php if(mysql_num_rows($transaction_list) > 0){  
	while($transaction = mysql_fetch_assoc($transaction_list)){ ?>
	<tr>
		<td><?php echo $transaction['category'] ?></td>
		<td><?php echo $transaction['amount'] ?></td>
		<td><?php echo date("F j, Y g:i:s a", strtotime($transaction['created_at'])) ?></td>
		<td><?php echo $transaction['description'] ?></td>
		<td><a id="delete-link-<?php echo $transaction['id'] ?>" class="delete-link" href="HW6_mbessey_8464.php?action=DELETE&id=<?php echo $transaction['id'] ?>" alt="Delete">Delete</a></td>
	</tr>
<?php }
 } else { ?>
 <tr>
	<td colspan="5">No Transactions</td>
</tr>
<?php } ?>

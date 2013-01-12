<?php 
	$transaction_query = "select category, sum(amount) total from hw6 group by category";
	$transaction_list = mysql_query($transaction_query) or die(mysql_error());
?>
<table id="totals">
<caption>Transaction Category Totals</caption>
<thead>
<tr>
	<th></th><th></th>
</tr>
</thead>
<tbody>
<?php if(mysql_num_rows($transaction_list) > 0){  
	while($transaction = mysql_fetch_assoc($transaction_list)){ ?>
	<tr>
		<th><?php echo $transaction['category'] ?></th>
		<td><?php echo $transaction['total'] ?></td>
	</tr>
<?php }
} ?>
</tbody>
</table>

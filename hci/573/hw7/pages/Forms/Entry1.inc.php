<?php
/*Form entry 1*/
?>
<form id="myfirstform" name="myfirstform" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
<table cellspacing="5" cellpadding="5" border="0">
<tr>
<td align="right">Field 1</td>
<td><input type="text" name="field1" value="<?php if( isset($_POST['field1']) ) echo stripslashes($_POST['field1']); ?>" /></td>
</tr>
<tr>
<td align="right" valign="top">Field 2</td>
<td><textarea name="field2" rows="15" cols="80"><?php if( isset($_POST['field2']) ) echo stripslashes($_POST['field2']); ?></textarea></td>
</tr>
<tr>
<td colspan="2" align="center">
	<input type="submit" name="add" value="Add Data!" />
</td>
</tr>
</table>
</form>
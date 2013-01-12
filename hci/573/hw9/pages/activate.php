<script type="text/javascript">
$(document).ready(function(){
	$("#activation_form").validate();
});
</script>

<h2>Activate</h2>

<form id="activation_form" action="<?php echo PAGE_ACTIVATE ?>" method="post">
<fieldset>
	
	<ul>
		<li>
			<label for="email">Email</label>
			<input id="email" name="email" type="text" value="<?php echo stripslashes($email) ?>" maxlength="200" class="required email" />
		</li>
		<li>
			<label for="activation-code">Activation Code</label>
			<input id="activation-code" name="activation-code" type="text" value="<?php echo stripslashes($activation_code) ?>" maxlength="10" class="required">
		</li>
		<li>
			<input id="activate" name="activate" type="submit" value="Activate Account">
		</li>
	</ul>
	
</fieldset>
</form>
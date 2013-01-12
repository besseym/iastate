<script type="text/javascript">
$(document).ready(function(){
	$("#registration_form").validate();
});
</script>

<h2>Register</h2>

<form id="registration_form" action="<?php echo PAGE_REGISTER ?>" method="post">
	<fieldset>
		
		<ol>
			<li>
				<label for="name">Name</label>
				<input id="name" name="name" type="text" value="<?php echo stripslashes($name) ?>" class="required" />
			</li>
			<li>
				<label for="email">Email</label>
				<input id="email" name="email" type="text" value="<?php echo stripslashes($email) ?>" maxlength="200" class="required email" />
			</li>
			<li>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" value="<?php echo stripslashes($username) ?>" maxlength="200" class="required" />
			</li>
			<li>
				<label for="password">Password</label>
				<input id="password" name="password" type="password" value="" maxlength="200" class="required" />
			</li>
			<li>
				<label for="password-confirm">Password Confirmation</label>
				<input id="password-confirm" name="password-confirm" type="password" value="" class="required" />
			</li>
			<li>
				<input id="register" name="register" type="submit" value="Submit Registration">
			</li>
		</ol>
	
	</fieldset>
</form>
<fieldset>
	
	<ol>
		<li>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value="<?php echo stripslashes($username) ?>" />
		</li>
		<li>
			<label for="email">Email</label>
			<input id="email" name="email" type="text" value="<?php echo stripslashes($email) ?>" />
		</li>
		<li>
			<label for="name">Name</label>
			<input id="name" name="name" type="text" value="<?php echo stripslashes($name) ?>" />
		</li>
		<li>
		<li>
			<input id="submit" name="submit" type="submit" value="Submit Registration">
		</li>
	</ol>

</fieldset>
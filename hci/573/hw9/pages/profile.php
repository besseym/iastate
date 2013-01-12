<script type="text/javascript">
$(document).ready(function(){
	$("#update_profile_form").validate();
});
</script>

<h2>Hello <?php echo $user->name ?></h2>

<form id="update_profile_form" action="<?php echo PAGE_PROFILE ?>" method="post">
	<fieldset>
		<legend>Update Your Profile</legend>
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
				<label for="password">New Password</label>
				<input id="password" name="password" type="password" value="" maxlength="200">
			</li>
			<li>
				<label for="password-confirm">Password Confirmation</label>
				<input id="password-confirm" name="password-confirm" type="password" value="">
			</li>
			<li>
				<input id="update" name="update" type="submit" value="Update Profile">
			</li>
		</ol>
	
	</fieldset>
</form>
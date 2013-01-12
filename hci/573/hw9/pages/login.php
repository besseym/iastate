<script type="text/javascript">
$(document).ready(function(){
	$("#login_form").validate();
});
</script>

<h2>Login</h2>

<form id="login_form" action="<?php echo PAGE_LOGIN ?>" method="post">
<fieldset>
	
	<ul>
		<li>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value="<?php echo stripslashes($username) ?>" class="required" />
		</li>
		<li>
			<label for="password">Password</label>
			<input id="password" name="password" type="password" value="" class="required">
		</li>
		<li>
			<input id="submit" name="submit" type="submit" value="Log In">
		</li>
	</ul>
	
</fieldset>
</form>
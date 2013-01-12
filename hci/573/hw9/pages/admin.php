<script type="text/javascript">
$(document).ready(function(){
	$("#create_user_form").validate();
});
</script>

<h2>Manage Users</h2>
<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Username</th>
			<th>Email</th>
			<th>Name</th>
			<th>Level</th>
			<th>Date</th>
			<th>Ip Address</th>
			<th>Approved</th>
			<th>Activation Code</th>
			<th>Number of Logins</th>
			<th>Last Login</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		<?php if(count($user_array) > 0){ ?>
			<?php foreach($user_array as $u){ ?>
			<tr>
				<td><?php echo $u->id; ?></td>
				<td><?php echo $u->username; ?></td>
				<td><?php echo $u->email; ?></td>
				<td><?php echo $u->name; ?></td>
				<td><?php echo $u->level; ?></td>
				<td><?php echo $u->date; ?></td>
				<td><?php echo $u->ip_address; ?></td>
				<td><?php echo $u->approved; ?></td>
				<td><?php echo $u->activation_code; ?></td>
				<td><?php echo $u->num_logins; ?></td>
				<td><?php echo $u->last_login; ?></td>
				<td>
					<a href="<?php echo PAGE_ADMIN; ?>&action=delete&id=<?php echo $u->id; ?>">Delete</a>
				</td>
			</tr>
			<?php } ?>
		<?php } else { ?>
			<tr>
				<td colspan="12">Currently, there are no users in the system.</td>
			</tr>
		<?php } ?>
	</tbody>
</table>

<form id="create_user_form" action="<?php echo PAGE_ADMIN ?>" method="post">
	<fieldset>
		<legend>Create New User</legend>
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
				<p>Password will be automatically generated and sent to user.</p>
			</li>
			<li>
				<input id="create" name="create" type="submit" value="Create User">
			</li>
		</ol>
	
	</fieldset>
</form>
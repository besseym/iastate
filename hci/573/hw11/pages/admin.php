<h2>Gallery Administration</h2>

<form id="image_upload_form" enctype="multipart/form-data" action="<?php echo PAGE_ADMIN ?>" method="post">
<fieldset>
	<legend>Upload Image to Gallery</legend>
	<ol>
		<li>
			<label for="image-title">Title</label>
			<input id="image-title" name="image-title" type="text" value="<?php echo stripslashes($image_title) ?>" class="required" />
		</li>
		<li>
			<label for="image-file">Choose Image to Upload</label>
			<input id="image-file" name="image-file" type="file" class="required"/>
		</li>
		<li>
			<input id="image-upload-submit" name="image-upload-submit" type="submit" value="Submit Image Upload" />
		</li>
	</ol>
</fieldset>
</form>

<table>
	<thead>
		<tr>
			<th></th>
			<th>Id</th>
			<th>Title</th>
			<th>Created At</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<?php if(count($image_array) > 0){ ?>
			<?php foreach($image_array as $img){ ?>
			<tr>
				<td>
					<img src="<?php echo $img->get_thumb_path(); ?>" width="<?php echo $img->thumb_width; ?>" height="<?php echo $img->thumb_height; ?>" alt="<?php echo $img->title; ?> Thumb" />
				</td>
				<td><?php echo $img->id; ?></td>
				<td><?php echo $img->title; ?></td>
				<td><?php echo $img->created_at; ?></td>
				<td>
					<a href="<?php echo PAGE_ADMIN; ?>&action=delete&id=<?php echo $img->id; ?>">Delete</a>
				</td>
			</tr>
			<?php } ?>
		<?php } else { ?>
			<tr>
				<td colspan="5">Currently, there are no images in the gallery.</td>
			</tr>
		<?php } ?>
	</tbody>
</table>

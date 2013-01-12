
<div id="gallery-container">
	<h2>Gallery</h2>
	<div id="gallery">
		
	    <ul>
	    
	    <?php if(count($image_array) > 0){ ?>
	    	<?php foreach($image_array as $img){ ?>
	    	<li>
	    		<a href="<?php echo $img->get_path(); ?>" title="<?php echo $img->title; ?>">
	    			<img src="<?php echo $img->get_thumb_path(); ?>" width="<?php echo $img->thumb_width; ?>" height="<?php echo $img->thumb_height; ?>" alt="<?php echo $img->title; ?> Thumb" />
	    		</a>
	    	</li>
	    	<?php } ?>
	    <?php } else { ?>
	    	<li>
	    		<p>Currently, there are no images in the gallery.</p>
	    	</li>
	    <?php } ?>
	    
	    </ul>
	    
	</div>
</div>
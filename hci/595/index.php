<h3>HCI 595 : Visual Design for Human Computer Interaction</h3>
<div class="clearfix">
	<aside id="class-nav-column" class="column">
		<nav>
			<ul>
				<?php if($c == 'home'){ ?>
				<li class="current-tab">Home</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_HCI_595 ?>">Home</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'play_it'){ ?>
				<li class="current-tab">Play IT Project</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_PLAY_IT_PROJECT ?>">Play IT Project</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'enable_it'){ ?>
				<li class="current-tab">Enable IT Project</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_ENABLE_IT_PROJECT ?>">Enable IT Project</a>
				</li>
				<?php } ?>
				
			</ul>
		</nav>
	</aside>
	<section id="class-content" class="column">
		<?php include $class_page; ?>
	</section>
</div>
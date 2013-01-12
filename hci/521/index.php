<h3>HCI 521 / Psychology 521 : Cognitive Psychology of Human-Computer Interaction</h3>
<div class="clearfix">
	<aside id="class-nav-column" class="column">
		<nav>
			<ul>
				<?php if($c == 'home'){ ?>
				<li class="current-tab">Home</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_HCI_521 ?>">Home</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'research_project'){ ?>
				<li class="current-tab">Research Project</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_RESEARCH_PROJECT ?>">Research Project</a>
				</li>
				<?php } ?>
				
			</ul>
		</nav>
	</aside>
	<section id="class-content" class="column">
		<?php include $class_page; ?>
	</section>
</div>
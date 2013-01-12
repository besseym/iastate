<header>
	<h3>HCI 596: Emerging Practices in Human Computer Interaction</h3>
</header>
<div class="clearfix">
	<aside id="class-nav-column" class="column">
		<nav>
			<ul>
				<?php if($c == 'home'){ ?>
				<li class="current-tab">Home</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_HCI_596 ?>">Home</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'philosophy'){ ?>
				<li class="current-tab">Philosophy</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_PHILOSOPHY ?>">Philosophy</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'persona'){ ?>
				<li class="current-tab">Persona</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_PERSONA ?>">Persona</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'storyboard'){ ?>
				<li class="current-tab">Storyboard</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_STORYBOARD ?>">Storyboard</a>
				</li>
				<?php } ?>
				
				<?php if($c == 'prototype'){ ?>
				<li class="current-tab">Prototype</li>
				<?php } else { ?>
				<li>
					<a href="<?php echo LINK_PROTOTYPE ?>">Prototype</a>
				</li>
				<?php } ?>
				
			</ul>
		</nav>
	</aside>
	<section id="class-content" class="column">
		<?php include $class_page; ?>
	</section>
</div>
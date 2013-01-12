<?php

require "includes/constants.inc.php";
require REAL_BASE . "includes/util_web.inc.php";

//parse the page
$p = parse_parameter();

//Determine the page to display
$page_unknown = false;
$page = null;
$head = null;
$page_link = null;

switch($p){
	case 'home':
		$page = PAGE_HOME;
		$head = PAGE_HOME_HEAD;
		$page_link = LINK_HOME;
		break;
	case 'hci_521':
		$page = PAGE_HCI_521;
		$head = PAGE_HCI_521_HEAD;
		$page_link = LINK_HCI_521;
		break;
	case 'hci_573':
		$page = PAGE_HCI_573;
		$head = PAGE_HCI_573_HEAD;
		$page_link = LINK_HCI_573;
		break;
	case 'hci_595':
		$page = PAGE_HCI_595;
		$head = PAGE_HCI_595_HEAD;
		$page_link = LINK_HCI_595;
		break;
	case 'hci_596':
		$page = PAGE_HCI_596;
		$head = PAGE_HCI_596_HEAD;
		$page_link = LINK_HCI_596;
		break;
	case 'hci_655':
		$page = PAGE_HCI_655;
		$head = PAGE_HCI_655_HEAD;
		$page_link = LINK_HCI_655;
		break;
	default:
		$page_unknown = true;
		break;
}


//Check to make sure the file actually exists, if no, call default
if(!file_exists($page) || $page_unknown){
	$page = PAGE_ERROR_404;
	$head = PAGE_ERROR_HEAD;
}


$messageArray = array();

require $head;

$title = "Michael Bessey";

?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title><?php echo $title ?></title>
		
		<link type="text/css" rel="stylesheet" media="all" href="styles/reset.css" />
		<link type="text/css" rel="stylesheet" media="all" href="styles/default.css" />
		<link type="text/css" rel="stylesheet" media="all" href="styles/main.css" />
		
	</head>
	<body>
		<div id="foundation">
			<header id="main-header">
				<h1><?php echo $title ?></h1>
				<h2>Iowa State Portfolio</h2>
				<nav id="main-nav" class="clearfix">
					<ul>
						<li <?php if($p == 'home'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HOME ?>">Home</a>
						</li>
						<li <?php if($p == 'hci_521'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HCI_521 ?>">HCI 521</a>
						</li>
						<li <?php if($p == 'hci_573'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HCI_573 ?>">HCI 573</a>
						</li>
						<li <?php if($p == 'hci_595'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HCI_595 ?>">HCI 595</a>
						</li>
						<li <?php if($p == 'hci_596'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HCI_596 ?>">HCI 596</a>
						</li>
						<li <?php if($p == 'hci_655'){ ?>class="current-class"<?php } ?>>
							<a href="<?php echo LINK_HCI_655 ?>">HCI 655</a>
						</li>
					</ul>
				</nav>
				
				<?php if(!empty($messageArray)){ ?>
				<div id="flash">
					<?php if($has_messages) { ?>
					<ul>
						<?php foreach($messageArray as $m){ ?>
							<li><?php echo $m ?></li>
						<?php } ?>
					</ul>
					<?php } ?>
				</div>
				<?php } ?>
				
			</header>
			<section id="main-section">
				<?php include $page; ?>
			</section>
			<footer id="main-footer">
				<p>Thank you for checking out my portfolio.</p>
			</footer>
		</div>
	</body>
</html>
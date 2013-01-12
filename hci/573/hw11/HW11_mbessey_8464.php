<?php
/*

Homework 11: Michael Bessey, April 9th 2012

**Homework 11: Create a dynamic PHP and MySQL driven media gallery

**You will need to:

	*1.  Create a webpage that has a media gallery (look at lecture notes for effective google search for existing, or if you happen to be a JQuery guru, code your own)
	*2.  Create a management section (does not require user authentication) that allows for file uploads, inserts data into database, and file removal (with associated database contents)
	*3.  Make it pretty!  You can absolutely use the styles that are already coded in whichever gallery you use, but you are also welcome to make your own.
	*4.  Go!


**Submit this assignment through the course website, and ensure that the filename is HW11_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW11_EMAIL_LAST4OFID.zip").
*/
//END INSTRUCTIONS

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_install.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

require HW_REAL_BASE . "/includes/util/util_validation.inc.php";
require HW_REAL_BASE . '/includes/util/util_image.inc.php';

$p_index = 'p';
$p = null;

if(isset($_GET[$p_index])){
	$p = $_GET[$p_index];
}
elseif(isset($_POST[$p_index])){
	$p = $_POST[$p_index];
}

if(!isset($p)){
	$p = 'gallery';
}

//Grab the page to display (if called)
$page = NULL;
$header = NULL;
switch($p){
	case 'gallery':
		$page = "gallery.php";
		$header = "gallery_header.php";
		break;
	case 'admin':
		$page = "admin.php";
		$header = "admin_header.php";
		break;
	default:
		$page = "error404.php";
		$header = "error_header.php";
		break;
}

//Check to make sure the file actually exists, if no, call default
if(!file_exists("pages/" . $page)){
	$page = "error404.php";
	$header = "error_header.php";
}

$messageArray = array();

require HW_REAL_BASE . "/pages/" . $header;

$title = "Homework 11: Media Gallery";

?>

<!DOCTYPE HTML>
<html>
	<head>
		<title><?php echo $title ?></title>
		
		<link type="text/css" rel="stylesheet" media="all" href="styles/jquery.lightbox-0.5.css" />
		<link href='http://fonts.googleapis.com/css?family=Quattrocento+Sans' rel='stylesheet' type='text/css'>
		<link type="text/css" rel="stylesheet" media="all" href="styles/main.css" />
		<script type="text/javascript" src="scripts/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="scripts/jquery.lightbox-0.5.min.js"></script>
		<script type="text/javascript" src="scripts/main.js"></script>
	</head>
	<body>
		<div id="main-header">
			<h1><?php echo $title ?></h1>
			<div id="nav">
				<ul>
					<li>
					<?php if($p == 'admin'){ ?>
						<a href="<?php echo PAGE_GALLERY ?>" >Gallery</a>
					<?php } else if($p == 'gallery'){ ?>
						<a href="<?php echo PAGE_ADMIN ?>" >Gallery Administration</a>
					<?php } ?>
					</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
		
		<?php if(!empty($messageArray)){ ?>
		<div id="flash">
			<ul>
				<?php foreach($messageArray as $m){ ?>
					<li><?php echo $m ?></li>
				<?php } ?>
			</ul>
		</div>
		<?php } ?>
		
		<div id="main-section">
			<?php include HW_REAL_BASE . "/pages/" . $page; ?>
		</div>
		<div id="main-footer">
		</div>
	</body>
</html>

<?php mysql_close($db_link); ?>


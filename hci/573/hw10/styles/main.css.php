<?php

require_once "../../includes/hw/constants.inc.php";
require_once "../includes/constants.inc.php";

header("Content-type: text/css");

$time = null;
$time_index = 'time';

if(isset($_GET[$time_index])){
	$time = $_GET[$time_index];
}

$hours = date("H");
if(isset($time)){
	$hours = date("H", strtotime($time));
}

$time_of_day = MORNING;
if($hours >= 5 && $hours < 10 ){
	$time_of_day = MORNING;
}
else if($hours >= 10 && $hours < 16){
	$time_of_day = AFTERNOON;
}
else if($hours >= 16 && $hours < 21){
	$time_of_day = DUSK;
}
else if($hours >= 21 || $hours < 5){
	$time_of_day = NIGHT;
}

$color = 'black';
$line_color = 'black';
$background_color = 'blue';
switch($time_of_day){
	case MORNING:
		//$color = 'yellow';
		break;
	case AFTERNOON:
		//$color = 'green';
		break;
	case DUSK:
		//$color = 'orange';
		break;
	case NIGHT:
		$line_color = 'white';
		$color = 'white';
		break;
	default:
		break;
}


?>

/* start standard */

body {
	margin: 0px auto;
	font-size: 1em;
	color: <?php echo $color; ?>;
	font-family: 'Arvo', serif;
	
	
	<?php if($time_of_day == MORNING){ ?>
	
	background: #6393c1; /* Old browsers */
	background: -moz-linear-gradient(top, #6393c1 10%, #ffe493 63%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(10%,#6393c1), color-stop(63%,#ffe493)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #6393c1 10%,#ffe493 63%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #6393c1 10%,#ffe493 63%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #6393c1 10%,#ffe493 63%); /* IE10+ */
	background: linear-gradient(top, #6393c1 10%,#ffe493 63%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6393c1', endColorstr='#ffe493',GradientType=0 ); /* IE6-9 */
	
	
	<?php } else if($time_of_day == AFTERNOON) { ?>
	
	background: #6393c1; /* Old browsers */
	background: -moz-linear-gradient(top,  #6393c1 20%, #cfe7fa 65%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(20%,#6393c1), color-stop(65%,#cfe7fa)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #6393c1 20%,#cfe7fa 65%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #6393c1 20%,#cfe7fa 65%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #6393c1 20%,#cfe7fa 65%); /* IE10+ */
	background: linear-gradient(top,  #6393c1 20%,#cfe7fa 65%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6393c1', endColorstr='#cfe7fa',GradientType=0 ); /* IE6-9 */
	
	<?php } else if($time_of_day == DUSK) { ?>
	
	background: #6393c1; /* Old browsers */
	background: -moz-linear-gradient(top,  #6393c1 1%, #ffe493 48%, #e55120 82%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#6393c1), color-stop(48%,#ffe493), color-stop(82%,#e55120)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #6393c1 1%,#ffe493 48%,#e55120 82%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #6393c1 1%,#ffe493 48%,#e55120 82%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #6393c1 1%,#ffe493 48%,#e55120 82%); /* IE10+ */
	background: linear-gradient(top,  #6393c1 1%,#ffe493 48%,#e55120 82%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6393c1', endColorstr='#e55120',GradientType=0 ); /* IE6-9 */
	
	
	
	<?php } else if($time_of_day == NIGHT) { ?>
	
	background-image: url('<?php echo HW_SITE_BASE; ?>/images/stars.jpg');
	
	<?php } ?>
	
}

h1 {
	white-space: nowrap;
}

p {
	line-height: 1.5em;
}

a, a:visited, a:hover, a:active {

	<?php if($time_of_day == MORNING) { ?>
	color: yellow;
	<?php } else if($time_of_day == AFTERNOON){ ?>
	color: black;
	<?php } else if($time_of_day == DUSK){ ?>
	color: purple;
	<?php } else if($time_of_day == NIGHT){ ?>
	color: yellow;
	<?php } ?>
	
}

/* end standard */

/* start common */

.clear {
	clear: both;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.column {
	float: left;
}

/* end common */


/* start structure */

#wrapper {
	
	z-index: 1000;
	background-image: url('<?php echo HW_SITE_BASE; ?>/images/field_landscape.png');
	background-size: 100% 100%;
	min-width: 1024px;
	min-height: 768px;
	
	<?php if($time_of_day == NIGHT) { ?>
	
	background-image: url('<?php echo HW_SITE_BASE; ?>/images/field_landscape_dark.png');
	
	<?php } else { ?>
	
	background-image: url('<?php echo HW_SITE_BASE; ?>/images/field_landscape.png');
	
	<?php } ?>
}

.signature {
	font-weight: bold;
}

.nav ul {
	list-style: none;
	margin: 0; padding: 0;
}

.nav ul li {
	margin: 0; padding: 0;
}

.nav ul li a {
	display: block; padding: 1em 0 1em 1.5em;
	text-decoration: none;
}

.nav ul li a:hover {
	color: black;
	background-color: white;
}

#main-nav {
	width: 15%;
	min-width: 150px;
}

#main-nav ul li {
	border-bottom: 1px solid <?php echo $line_color; ?>;
}

#main-nav ul li.current-page a {
	color: black;
	background-color: rgba(255,255,255,0.75);
}

#main-header {
	border-bottom: 1px solid <?php echo $line_color; ?>;
	padding: 0 0 1em 5%;
}

#main-section {
	
}

#main-content {
	color: black;
	width: 50%;
	min-height: 500px;
	padding: 0 2em 2em 2em;
	border-left: 1px solid <?php echo $line_color; ?>;
	border-right: 1px solid <?php echo $line_color; ?>;
	background-color: rgba(255,255,255,0.75);
}

#main-content p {
	font-family: 'Coming Soon', cursive;
}

#main-footer {
	color: white;
	border-top: 1px solid <?php echo $line_color; ?>;
	text-align: center;
	padding: 1em 0 5em 0;
}

.aside {
	padding: 0 2em 2em 2em;
	width: 20%;
}

.celestial-sphere {
	position: absolute;
	left: 800px;
	z-index: -100;
}

#sun {
	
	<?php if($time_of_day == MORNING) { ?>
	top: 450px;
	width: 192px; height: 192px;
	<?php } else if($time_of_day == AFTERNOON){ ?>
	top: 25px;
	width: 128px; height: 128px;
	<?php } else if($time_of_day == DUSK){ ?>
	top: 500px;
	width: 192px; height: 192px;
	<?php } else if($time_of_day == NIGHT){ ?>
	display: none;
	<?php } ?>
}

#moon {
	
	top: 50px;
	width: 192px; height: 192px;
	
	<?php if($time_of_day == MORNING || $time_of_day == AFTERNOON || $time_of_day == DUSK){ ?>
	display: none;
	<?php } ?>
}

/* end structure */


.overlay {
	top: 0%;
	left: 0%;
	width:100%;
	height:100%;
	text-align: center;
	z-index: 1000;
	background-color: black;
	-moz-opacity: 0.8;
	opacity: 0.8;
	filter: alpha(opacity=80);
	position: fixed;
}


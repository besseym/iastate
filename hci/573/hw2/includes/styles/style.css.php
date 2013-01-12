/* this is the global stylesheet */
<?php

header("Content-type: text/css");

require "../../../includes/hw/constants.inc.php";
require "../constants.inc.php";
?>

body {
	margin: 0px auto;
	padding: 0px auto;
	font-family: Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif;
	background: #eee url(<?php echo HW_SITE_BASE; ?>/images/background.png);
}

h2 {
	font-style: italic;
}

ul#navigation { 
	margin: 0px;
	padding: 0px;
	width: 100%;
	list-style: none;
}

#navigation li {
	float: left;
	width: 23%;
	padding: 2px 1% 2px 1%;
}

#navigation a {
	display: block;
	text-decoration: none;
}

#navigation a:hover {
	font-weight: bold;
	font-style: italic;
}

.selected-page {
	font-weight: bold;
	background-color: #000;
}

.selected-page a {
	color: white;
}

#main {
	width: 75%;
	margin: 0px auto;
	margin-top: 10%;
	border: 1px groove;
	background: #eee;
	padding: 25px;
	opacity: 0.75;
	/* support for IE */
	filter:alpha(opacity=75);
}

#content {
	padding-top: 15px;
	border-top: 1px solid black;
	clear:  both;
}
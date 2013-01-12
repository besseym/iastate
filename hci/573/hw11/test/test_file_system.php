<?php

require "../includes/constants.inc.php";
require REAL_BASE . 'includes/util/util_file_system.inc.php';

$path = '../gallery';
$file_array = dir_tree($path);

var_dump($file_array);

?>
<?php 

require "../includes/hw/constants.inc.php";
require "includes/constants.inc.php";

require REAL_BASE . "/includes/hw/db_constants.inc.php";
require HW_REAL_BASE . "/includes/db_constants.inc.php";
require REAL_BASE . "/includes/hw/db_helper.inc.php";
require REAL_BASE . "/includes/hw/db_connect.inc.php";

require HW_REAL_BASE . '/includes/pages/transaction_post.seg.php';

mysql_close($db_link);
?>
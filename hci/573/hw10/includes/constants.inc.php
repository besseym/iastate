<?php

$hw_context_path = "/hw10";

define ("HW_REAL_BASE", REAL_BASE . $hw_context_path );
define ("HW_SITE_BASE", SITE_BASE . $hw_context_path);

//constant page locations
define ("PAGE_HOME", HW_SITE_BASE . "/HW10_mbessey_8464.php?p=home");
define ("PAGE_DAY_AND_NIGHT", HW_SITE_BASE . "/HW10_mbessey_8464.php?p=day_and_night");
define ("PAGE_NIGHT_AND_DAY", HW_SITE_BASE . "/HW10_mbessey_8464.php?p=night_and_day");
define ("PAGE_DAY_AND_NIGHT_1", HW_SITE_BASE . "/HW10_mbessey_8464.php?p=day_and_night_1");


define ("MORNING", 0);
define ("AFTERNOON", 1);
define ("DUSK", 2);
define ("NIGHT", 3);

define ("TIME", 'time');

?>
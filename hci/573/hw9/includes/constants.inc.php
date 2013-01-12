<?php

$hw_context_path = "/hw9";

define ("HW_REAL_BASE", REAL_BASE . $hw_context_path );
define ("HW_SITE_BASE", SITE_BASE . $hw_context_path);

//constant page locations
define ("PAGE_HOME", HW_SITE_BASE . "/HW9_mbessey_8464.php");
define ("PAGE_LOGIN", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=login");
define ("PAGE_REGISTER", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=register");
define ("PAGE_PROFILE", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=profile");
define ("PAGE_ACTIVATE", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=activate");
define ("PAGE_ADMIN", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=admin");
define ("PAGE_LOGOUT", HW_SITE_BASE . "/HW9_mbessey_8464.php?p=logout");

define ("GLOBAL_EMAIL", "mbessey@iastate.edu");

//session keys
define ("USER", "user");
define ("LOGGED", "logged");

//user levels
define ("ADMIN_LEVEL", 5);
define ("USER_LEVEL", 1);

?>
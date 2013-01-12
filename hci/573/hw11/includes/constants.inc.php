<?php

$hw_context_path = "/hw11";

define ("HW_REAL_BASE", REAL_BASE . $hw_context_path );
define ("HW_SITE_BASE", SITE_BASE . $hw_context_path);

//constant page locations
define ("PAGE_GALLERY", HW_SITE_BASE . "/HW11_mbessey_8464.php");
define ("PAGE_ADMIN", HW_SITE_BASE . "/HW11_mbessey_8464.php?p=admin");

define ("GALLERY_IMAGE_FILE_PATH", HW_REAL_BASE . "/gallery/image/");
define ("GALLERY_THUMB_FILE_PATH", HW_REAL_BASE . "/gallery/thumb/");

define ("GALLERY_IMAGE_SITE_PATH", HW_SITE_BASE . "/gallery/image/");
define ("GALLERY_THUMB_SITE_PATH", HW_SITE_BASE . "/gallery/thumb/");

define ("GALLERY_THUMB_SIZE", 100);

?>
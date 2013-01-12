<?php

$context_path = "/";
$context_path = "/iastate/";

define ("REAL_BASE", $_SERVER['DOCUMENT_ROOT'] . $context_path);
define ("SITE_BASE", "http://".$_SERVER['HTTP_HOST'] . $context_path);

//constant page locations
define ("LINK_HOME", SITE_BASE . "?p=home");
define ("PAGE_HOME", REAL_BASE . "pages/home.php");
define ("PAGE_HOME_HEAD", REAL_BASE . "pages/home_head.php");

define ("PAGE_ERROR_404", REAL_BASE . "pages/error_404.php");
define ("PAGE_ERROR_HEAD", REAL_BASE . "pages/error_head.php");

//constant page locations
define ("LINK_HCI_521", SITE_BASE . "?p=hci_521");
define ("REAL_BASE_HCI_521", REAL_BASE . "hci/521/");
define ("SITE_BASE_HCI_521", SITE_BASE . "hci/521/");
define ("PAGE_HCI_521", REAL_BASE_HCI_521 . "index.php");
define ("PAGE_HCI_521_HEAD", REAL_BASE_HCI_521 . "index_head.php");

define ("LINK_HCI_573", SITE_BASE . "?p=hci_573");
define ("REAL_BASE_HCI_573", REAL_BASE . "hci/573/");
define ("SITE_BASE_HCI_573", SITE_BASE . "hci/573/");
define ("PAGE_HCI_573", REAL_BASE_HCI_573 . "index.php");
define ("PAGE_HCI_573_HEAD", REAL_BASE_HCI_573 . "index_head.php");

define ("LINK_HCI_595", SITE_BASE . "?p=hci_595");
define ("REAL_BASE_HCI_595", REAL_BASE . "hci/595/");
define ("SITE_BASE_HCI_595", SITE_BASE . "hci/595/");
define ("PAGE_HCI_595", REAL_BASE_HCI_595 . "index.php");
define ("PAGE_HCI_595_HEAD", REAL_BASE_HCI_595 . "index_head.php");

define ("LINK_HCI_596", SITE_BASE . "?p=hci_596");
define ("REAL_BASE_HCI_596", REAL_BASE . "hci/596/");
define ("SITE_BASE_HCI_596", SITE_BASE . "hci/596/");
define ("PAGE_HCI_596", REAL_BASE_HCI_596 . "index.php");
define ("PAGE_HCI_596_HEAD", REAL_BASE_HCI_596 . "index_head.php");

define ("LINK_HCI_655", SITE_BASE . "?p=hci_655");
define ("REAL_BASE_HCI_655", REAL_BASE . "hci/655/");
define ("SITE_BASE_HCI_655", SITE_BASE . "hci/655/");
define ("PAGE_HCI_655", REAL_BASE_HCI_655 . "index.php");
define ("PAGE_HCI_655_HEAD", REAL_BASE_HCI_655 . "index_head.php");

?>
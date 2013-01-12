<?php

define ("REAL_BASE", $_SERVER['DOCUMENT_ROOT']."/hci/573/hw9/");
define ("SITE_BASE", "http://localhost:8888/hci_573/hw9/");

define ("PAGE_ACTIVATE", SITE_BASE . "HW9_mbessey_8464.php?p=activate");
define ("GLOBAL_EMAIL", "mbessey@iastate.edu");

require REAL_BASE . "includes/model/m_user.inc.php";
require REAL_BASE . "includes/messenger.inc.php";

$user = new User;
$user->name = "Michael";
$user->username = "besseym";
$user->email = "besseym@gmail.com";
$user->password = "pass";
$user->md5_id = "c51ce410c124a10e0db5e4b97fc2af39";
$user->activation_code = "1641";

send_html_activation_msg($user);

echo "Activation email sent!";

/*
$headers = "From: HCI573  <".GLOBAL_EMAIL.">rn";
$headers = "Return-Path: " . GLOBAL_EMAIL . "rn";
$headers .= "Message-ID: <" . gettimeofday(true) . " TheSystem@yourwebsite.com>rn";
$headers .= "MIME-Version: 1.0rn";
$headers .= "Content-Type: text/html; charset=UTF-8rn";
*/

/*
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$to = "besseym@gmail.com";
$subject = "This is an email subject 5";
$message = "<html><body><p>This is an email message 5</p></body></html>";

mail($to, $subject, $message, $headers);

echo "Basic Message has hopefully been Sent 5";
*/

/*
$to = "besseym@gmail.com";
$subject = "This is an email subject 2";
$message = "This is an email message 2";

send_html_mail_msg($to, $subject, $message);

echo "HTML Message has hopefully been Sent 2";
*/

?>
<?php

define("MESSAGE_TOP", "<html>
<body style=\"background-color: #888888; margin: 0; padding: 2em 0; font-size: 1em;\">
<div style=\"padding: 1em; width: 80%; background-color: #fff; margin: 0 auto;\">
<div style=\"border-bottom: 1px solid black;\">");

define("MESSAGE_BOTTOM", "</div>
<div style=\"text-align: right; color: #999; font-size: 10px;\">
<p>&copy; HW9_mbessey_8464</p>
</div>
</div>
</body>
</html>");


/*Constants to send consistent system emails*/
/*
define("MESSAGE_TOP", "<html>
<body style=\"background-color: #888888; margin: 0; padding: 2em 0; font-size: 1em;\">
<div style=\"padding: 1em; width: 80%; background-color: #fff; margin: 0 auto;\">
<div>
<img src=\"http://static.php.net/www.php.net/images/php.gif\" width=\"120\" height=\"67\" alt=\"PHP Logo\">
</div>
<div style=\"border: 1px solid black; border-left: none; border-right: none;\">");
*/

/*
define("MESSAGE_BOTTOM", "</div>
<div style=\"text-align: right; color: #999; font-size: 10px;\">
<p>&copy; HW9_mbessey_8464</p>
</div>
</div>
</body>
</html>");
*/

function send_mail_msg($to, $subject, $message) {
	return mail($to, $subject, $message);
}

function send_html_mail_msg($to, $subject, $message) {

	$message_body = MESSAGE_TOP;
	$message_body .= $message;
	$message_body .= MESSAGE_BOTTOM;
	
	$headers = "From: HCI573  <" . GLOBAL_EMAIL . ">" . "\r\n";
	$headers .= "Message-ID: <" . gettimeofday(true) . " TheSystem@yourwebsite.com>" . "\r\n";
	$headers .= "Return-Path: " . GLOBAL_EMAIL . "\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
 
	$send = mail($to, $subject, $message_body, $headers);
}

function send_html_activation_msg($user){

	$activation_link = PAGE_ACTIVATE . "&user=" . $user->md5_id . "&code=" . $user->activation_code;

	$to = $user->email;
	$subject = "Welcome " . $user->name;
	
	//Build a message to email for confirmation
	$message = "<p>Hello " . $user->name . "!</p>
	<p>Thank you for registering with us.</p>
	<p>
	The following are your login details:
	<ul>
	<li>User ID: " . $user->username . "</li>
	<li>Email: " . $user->email . "</li>
	<li>Password: " . $user->password . "</li>
	</ul>
	</p>
	<p>
	You will NOT be able to login until your account has been activated. Proceed <a href=\"" . $activation_link . "\">here</a> to activate you account.
	</p>
	<p>
	Or paste the following into your browser address bar:<br/>" 
	. $activation_link . "
	</p>
	<p>
	Thank You,<br />
	Site Administrator
	</p>";

	send_html_mail_msg($to, $subject, $message);
}

?>
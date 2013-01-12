<?php

/*
Homework 4: Michael Bessey, February 6th 2012

**HW4: Solving Everyday Life Problems with PHP

**Provide short answers to the following questions and scenarios (keeping in mind that creativity and relevance count!).

**Use PHP to echo each question, and your answer to each question.

**Use HTML within the page to make it readable (may be used within php [i.e. echo "<p>" . $variable . "</p>", OR echo "<p>$variable</p>"], or as standard HTML (outside of PHP).

**Submit this assignment through the course website, and ensure that the filename is HW4_EMAIL_LAST4OFID.php, and it has been compressed into a folder of the same name (i.e. "HW4_EMAIL_LAST4OFID.zip").

*/

$title = "Homework 4: Michael Bessey, February 6th 2012";

?>

<html>
<head>
	<title><?php echo $title ?></title>
</head>
<body>
<h1><?php echo $title ?></h1>
<ol>

	<li>
		<?php
		
		$question1 = "Provide an example of at least one way that you can use code to manage information that is useful to you.  Imagine that you can use PHP, MySQL, or any other technology covered in this course, and make sure to mention the information!";
		
		$answer1 = "With HTML, PHP and MySQL I could build a website to manage my library of Blu-ray movies. When I purchase a new movie I would submit a form on the website to store a movie's information in the MySQL database. When I sell one of my movies I would use this same website to delete a movie's information from the database. I could also use this website to update information about each movie such as give the movie a star rating or whether I have let a friend borrow the movie.";
		?>
		
		<b><?php echo $question1; ?></b>
		<p><?php echo $answer1; ?></p>
	</li>
	
	<li>
		<?php
		
		$question2 = "How could you use PHP to help you go grocery shopping?";
		
		$answer2 = "I could build a website that manages my grocery list. The website would be built with PHP and would provide functionality to store grocery items into a MySQL database. With a grocery list website I could access and manage my grocery list from any web enabled device. I could manage my grocery list at home, after consulting my fridge, and then I would access the grocery list from the browser on my smart phone while shopping at the grocery store.";
		
		?>
		
		<b><?php echo $question2; ?></b>
		<p><?php echo $answer2; ?></p>
	</li>
	
	<li>
		<?php
		
		$question3 = "What sort of social/ethical implications apply in terms of data privacy and security when using PHP or MySQL?";
		
		$answer3_part1 = "In a PHP website one can use PHP to create and store browser cookies. To be considerate of a user's security and privacy one should not store sensitive information such as passwords or bank account information in a browser cookie in case the user is accessing your website from a public computer.";
		
		$answer3_part2 = "Also, to be considerate of a user's security and privacy, when storing sensitive information such as passwords or bank account information in a MySQL database, one should not store this sensitive information in plain text. One should use an encryption algorithm to encrypt the information first before saving the information to the database.";
		
		?>
		
		<b><?php echo $question3; ?></b>
		<p><?php echo $answer3_part1; ?></p>
		<p><?php echo $answer3_part2; ?></p>
	</li>
	
	<li>
		<?php
		
		$question4 = "What kinds of vulnerabilities exist within PHP and MySQL?";
		
		$answer4_part1 = "SQL Injection (to inject malicious SQL queries into input values), Cross-Site Scripting (to inject malicious JavaScript into input values) and File Inclusion Attack (tricking a web applicatin into including remote files with malicious code ). Each of these attacks can be avoided by properly cleansing input values submitted by forms.";
		
		$answer4_part2 = "Denial-of-Service attacks (when a database server is hit with a flood of requests from other servers), Buffer overflows (when input sources are overflowed with far more characters than an application was expecting) and Weak Login Credentials (requiring users to have strong username/password combinations are essential for keeping a database secure)";
		
		?>
		
		<b><?php echo $question4; ?></b>
		<p><i>PHP Vunerabilites: </i> <?php echo $answer4_part1; ?></p>
		<p><i>MySQL Vunerabilites:</i> <?php echo $answer4_part2; ?></p>
		
	</li>
	
	<li>
	
		<?php
		
		$question5 = "Presumably, you've used a large number of websites today.  Write 3 examples of ways that a website (or websites) could've been dynamic today.  For example, the website for this course could've used the datefield in a MySQL database to dynamically make this assignment available to you (yay?).";
		
		$answer5_part1 = "I like the functionality offered by w3schools.com where one can learn about a specific bit of web code and then can dynamically try it out on the site. It would be nice if php.net offered the same functionality where one could learn about a php function and then try it out without leaving the php.net website.";
		
		$answer5_part2 = "I wish Iowa State had a web application for planning your course schedule. This schedule planner would indicate what classes you have taken, what required classes you need to take as well as list all possible elective classes. Each listed class would also indicate in which semester the class will be offered. This application would essentially allow you to schedule on a calendar every class you need to take in order to meet the requirements for your degree.";
		
		$answer5_part3 = "I have a request for additional dynamic functionality to be added to the HCI 573X class website. Essentially I have a general comment to make which is not specific to an assignment or lecture. I would like a page or section added to the course website where one could make comments about the class as a whole or about web development in general. <em>Thanks.</em>";
		
		?>
	
		<b><?php echo $question5; ?></b>
		<ul>
			<li><p><?php echo $answer5_part1 ?></p></li>
			<li><p><?php echo $answer5_part2 ?></p></li>
			<li><p><?php echo $answer5_part3 ?></p></li>
		</ul>
	
	</li>

</ol>
</body>
</html>
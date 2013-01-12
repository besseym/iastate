<?php
/* 
Michael Bessey, January 16 2012
Homework 1 part 1: Select anything from the syllabus that you find interesting, and output it to this page using a PHP function.
Your rendered page should include:
1. Your name, and the name of the homework (i.e. HW1)
2. The date (use PHP to output the date [hint: use existing date('') functions])
3. At least 2 sentences from the syllabus that you found interesting/irritating

Don't be shy- make it look good!  Include some valid HTML in your output so that you aren't left with one solid string of words!  Quick formatting can include "<br />" (line break), "<p>text here</p>" (paragraph breaks), and "<hr />" (line breaks).

Make sure to comment your work, preferably short comments using "//" or "#"

If you get stuck, refer to the lecture notes

Save this file as "HW1-1_EMAIL_LAST4OFID.php" and move on to part 2.
*/

//header values
$name = "Michael Bessey";
$homework = "Homework #1";
$date = date("l F jS, Y");

//syllabus sentences
$sentence1 = "This course teaches the development of web-based interfaces for web applications using user-centered design and interaction patterns managed with dynamic database driven queries and advanced user feedback.";
$sentence2 = "Performing usability testing and evaluations for end users.";
$sentence3 = "Using JavaScript and Ajax to implement features to enhance user experience.";

//function to return a header string for the title of the page
function return_header($name, $homework, $date){
	return $name . " : " . $homework . " : " . $date;
}

//function to concatenate of a few sentences from the syllabus
function return_syllabus($sentence1, $sentence2, $sentence3)
{
    $hw = $sentence1 . ' ';
    $hw .= $sentence2 . ' ';
    $hw .= $sentence3;

	return $hw;
}
?>

<html>
<head>
	<title><?php echo return_header($name, $homework, $date); ?></title>
</head>
<body>

<h1><?php echo return_header($name, $homework, $date); ?></h1>

<hr/>

<h2>Interesting Sentences from the Syllabus</h2>
<p><?php echo return_syllabus($sentence1, $sentence2, $sentence3); ?></p>

</body>
</html>

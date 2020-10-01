<?php

	$random = rand(1, 10); 
	$num = $_POST['num'];   
	$counter = 1;
	session_start();

	if(!isset($_SESSION["sysnum"])) {
		$_SESSION["sysnum"] = $random;
	}
	if(!isset($_SESSION["count"])) {
		$_SESSION["count"] = $counter;
	}

	if($_SESSION["sysnum"] == $_POST["num"]) {
		echo "you have guessed the correct number";
		session_destroy();
	}
	else {

		if($_SESSION["count"] == 3)
		{
			echo "You guessed the incorrect number, the number was: ";
			echo "$random";
		}
		else if($_SESSION["count"] < 3)
		{
			$_SESSION["count"] += 1;
			echo "Wrong guess.";
			echo '<a href="index.html">Try again</a>';			
		}
	}
	
?>



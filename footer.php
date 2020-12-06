<?php

	$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	
	
	$dirPrefix = "../";
	
	$dirToCheckTo = 'https://mircogames.nl/';
	
	if($actual_link === $dirToCheckTo){
		$dirPrefix = "";
	}
	
	
	$footerStart = '<div class="footer border-top-blue">
	<div class="container">

		<div class="row no-gutters">

				<div class="col-12 col-sm-6 col-lg-4 text-center text-sm-left">
					<ul class="no-dots ul-align">';
					
	$mail = '<div ><i class="material-icons social-icons">mail</i><a href="mailto:mircobaalmans@live.nl">mircobaalmans@live.nl</a></div>';
	$linkedin = '<div ><img class="social-icons" src="' . $dirPrefix . 'images/icons/LI-In-Bug.png"/><a href="https://www.linkedin.com/in/mircobaalmans/">LinkedIn</a></div>';
	$github = '<div ><img class="social-icons" src="'. $dirPrefix . 'images/icons/GitHub-Mark-64px.png"/><a href="https://github.com/mdbaal">Github</a></div>';
	$location = '<div ><i class="material-icons social-icons">location_on</i>Winsum GN</div>';
	$footerEnd = '</ul>
				</div>
				<div class="col-12">&nbsp; &copy; 2020 Mirco Baalmans</div>
		</div>
	</div>

</div>';


echo ($footerStart . $mail . $linkedin . $github . $location . $footerEnd);

?>

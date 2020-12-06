<!DOCTYPE html>
<html lang="nl" dir="ltr">
<?php include '../head.php';?>
<meta property="og:title" content="Mijn werk">
<meta property="og:description" content="Mijn werk">
<meta name="description" content="Mijn werk gamedeveloper Mirco Baalmans">
<meta name="keywords" content="gamedeveloper portfolio programmeur unity c# c++ mijn werk">

<title>Mijn werk - Mirco Baalmans</title>
</head>
<body>
  <?php include '../header.php';?>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 id="mijn-werk-id">Mijn werk</h1>
        </div>
		<div class= "col-12">
			<div class="projecten">
			<div class="row">
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/tkht.png" alt="Project img" data-bigimage="../images/tkht.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">The king his things - C# Unity 2020</h3>
								<p class="project-desc">The king his things is een text adventure met een visueel element. Het doel is om de koning zijn spullen te stelen zonder gepakt te worden</p>
								<a class="project-link" href="https://github.com/mdbaal/TKHT">Github link</a>
							</div>
						</div>
					</div>
				</div>
			
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/framework3.png" alt="Project img" data-bigimage="../images/framework3.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">Project Framework OpenGL - C++ 2018 / 2019</h3>
								<p class="project-desc">
									Met Project framework was het de opdracht om in c++ met OpenGL een framework te maken voor games.
									Ik ben er in 2018 mee begonnen en in 2019 ben ik er mee verder gegaan toen ik mijn 2e jaar opnieuw deed.
								</p>
								<a class="project-link" href="https://github.com/mdbaal/BlastFramework">Github link</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/infra1.png" alt="Project img" data-bigimage="../images/infra1.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">InfraBoii - C# 2019</h3>
								<p class="project-desc">
								Met infraBoii was het de opdracht om zelf een controller te maken en daarbij een game.
								Ik heb samen met mijn teamgenoot een duel game gemaakt met infrarood zenders en ontvangers.
								</p>
								<a class="project-link" href="../downloads/InfraBoii.zip">Download link</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/scriptbuilder.png" alt="Project img" data-bigimage="../images/scriptbuilder.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">Scriptbuilder - C++ 2019</h3>
								<p class="project-desc">Dit was een eigen project voor mijn framework. Hiermee kan ik makkelijk c++ classes maken door een c++ en header file aan te maken.</p>
								<a class="project-link" href="https://github.com/mdbaal/scriptbuilder">Github link</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/Finanapp.png" alt="Project img" data-bigimage="../images/Finanapp.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">FinanApp - C++ 2019</h3>
								<p class="project-desc">FinanApp is een console based financiele overzicht app in C++. Het nog niet zo ver dat het echt te gebruiken is maar het werkt wel. Dit is een eigen project los van school.</p>
								<a class="project-link" href="https://github.com/mdbaal/finanApp1">Github link</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/Astar2.png" alt="Project img" data-bigimage="../images/Astar2.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">A star - Java 2018</h3>
								<p class="project-desc">A star is een pathfinding algoritme die ik in Java heb na gemaakt met behulp van javaFX</p>
								<a class="project-link" href="https://github.com/mdbaal/AStar">Github link</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-12">
					<div class="project">
						<div class="row">
							<div class="col-3">
								<img class="project-img img-fluid" src="../images/thumbnails/bintree.png" alt="Project img" data-bigimage="../images/bintree.png">
							</div>
							<div class="col-9">
								<h3 class="project-title">Binary tree - C++ 2018</h3>
								<p class="project-desc">Dit was een eigen project waar in ik een binary tree in C++ heb gemaakt.</p>
								<a class="project-link" href="https://github.com/mdbaal/BinaryTree">Github link</a>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
      </div>
    </div>
		
		</div>
		<div class="projectimage">
			<div class="projectimage-block">
			<i class="material-icons">clear</i>
				<img class="img-fluid" src="" alt="bigimage"/>
			</div>
		</div>
		
</section>

    <script>
		$(".project-img").click(function(){
				$(".projectimage").show();
				$(".projectimage img").attr('src',$(this).attr("data-bigimage"));
		});
		
		
		$(".projectimage").click(function(){
				$(".projectimage").hide();
		});
		
	</script>

    <?php include '../footer.php';?>
  </body>
  </html>

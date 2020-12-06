<section>
  <!-- Swiper -->
  <div class="container">
    <div class="row">
      <div class="work-short col-12">
        <div id="swiperContainer">
          <div class="swiper-container">
            <div class="swiper-wrapper">
			
              <div class="swiper-slide project-small">
                <a href="/mijn-werk/">
                  <div class="img-zoom"><img src="images/thumbnails/framework3.png" alt="Framework - C++"></div>
                  <div class="project-small-title">Framework - C++</div>
                </a>
              </div>
			  
              <div class="swiper-slide project-small">
                <a href="/mijn-werk/">
                  <div class="img-zoom">
                    <img src="images/thumbnails/tkht.png" alt="The King His Things - C# Unity">
                  </div>
                  <div class="project-small-title">The King His Things - C#</div>
                </a>
              </div>
			  
              <div class="swiper-slide project-small">
                <a href="/mijn-werk/">
                    <div class="img-zoom">
                      <img src="images/thumbnails/infra1.png" alt="Infraboii - C# Unity">
                    </div>
                    <div class="project-small-title">Infraboii - C#</div>
                  </a>
                </div>
				
                <div class="swiper-slide project-small">
                  <a href="/mijn-werk/">
                    <div class="img-zoom"><img src="images/thumbnails/Finanapp.png" alt="FinanApp - C++"></div>
                    <div class="project-small-title">FinanApp - C++</div>
                  </a>
                </div>
				
                <div class="swiper-slide project-small">
                  <a href="/mijn-werk/">
                    <div class="img-zoom"><img src="images/thumbnails/Astar.png" alt="A Star - Java"></div>
                    <div class="project-small-title">A Star - Java</div>
                  </a>
                </div>
				
				<div class="swiper-slide project-small">
                  <a href="/mijn-werk/">
                    <div class="img-zoom"><img src="images/thumbnails/bintree.png" alt="Binary tree - C++"></div>
                    <div class="project-small-title">Binary tree - C++</div>
                  </a>
                </div>
				
				<div class="swiper-slide project-small">
                  <a href="/mijn-werk/">
                    <div class="img-zoom"><img src="images/thumbnails/scriptbuilder.png" alt="Scriptbuilder - C++"></div>
                    <div class="project-small-title">Scriptbuilder - C++</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Initialize Swiper -->
    <script>
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      spaceBetween:10,
      loop:true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints:{
        1200:{
          slidesPerView: 4.5,
          spaceBetween:30
        },
        992:{
          slidesPerView: 3.5,
          spaceBetween:30
        },
        768:{
          slidesPerView: 2.5,
          spaceBetween:30
        },
        576:{
          slidesPerView: 2.5,
          spaceBetween:30
        },
        425:{
          slidesPerView: 2.5,
          spaceBetween:30
        }
      }
    });

    </script>
  </section>

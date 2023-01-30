<template>
    <div class="ori-inner-page" >
        <Header/>
	<Search/>
	<Sidebar/>	

	<section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
		<div class="container">
			<div class="ori-breadcrumb-content text-center ul-li">
				<h1>Our Mission</h1>
				<ul>
					<li><a href="index.html">orixy</a></li>
					<li>Our Mission</li>
				</ul>
			</div>
		</div>
		<div class="line_animation">
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div> 
		</div>
	</section>
	<section id="ori-mission" class="ori-mission-section position-relative">
		<div class="container">
			<div class="ori-mission-content">
				<div class="row">
					<div class="col-lg-6">
						<div class="ori-mission-title-text">
							<div class="ori-inner-section-title">
								<span class="sub-title text-uppercase">OUR PHILOSOPHY</span>
								<h2>Create Brand Identities & Digital Experiences</h2>
								<p>Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod temporRorem ipsum dolor</p>
							</div>
							<div class="ori-btn-1 text-uppercase">
								<a href="https://html.themexriver.com/Orixy/contact.html">GET IN TOUCH</a>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="ori-mission-accordion position-relative">
							<div class="accordion" id="accordionExample">
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingOne">
										<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											Technology
										</button>
									</h2>
									<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											Technology is the result of accumulated knowledge and application of skills, methods, 
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingTwo">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											Innovation
										</button>
									</h2>
									<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											Technology is the result of accumulated knowledge and application of skills, methods, 
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingThree">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Analytics
										</button>
									</h2>
									<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											Technology is the result of accumulated knowledge and application of skills, methods, 
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<h2 class="accordion-header" id="headingFour">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											Services
										</button>
									</h2>
									<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										<div class="accordion-body">
											Technology is the result of accumulated knowledge and application of skills, methods, 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line_animation">
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
		</div>
	</section>

	<section id="ori-vission" class="ori-vission-section position-relative">
		<div class="container">
			<div class="ori-vission-content">
				<div class="row">
					<div class="col-lg-6">
						<div class="ori-vission-text-area">
							<div class="ori-service-why-choose-text">
								<div class="ori-inner-section-title">
									<span class="sub-title text-uppercase">Why choose us</span>
									<h2>Unlock Revenue Growth for Your Business
									</h2>
								</div>
								<div class="ori-service-why-choose-list-item ul-li-block">
									<ul>
										<li>High Standards</li>
										<li>Focus on People</li>
									</ul>
								</div>
								<div class="ori-vission-more-btn text-uppercase">
									<a href="about.html">Read More <i class="fal fa-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="ori-about-play-area position-relative">
							<div class="ori-about-play-img">
								<img src="https://html.themexriver.com/Orixy/assets/img/about/v-play.png" alt="">
							</div>
							<div class="about-play-btn position-absolute">
								<a class="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll">Play</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line_animation">
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
			<div class="line_area"></div>
		</div>
	</section>
	<Sponsor/>	
    <Footer/>


    </div>

</template>
<script setup >
import Header from '~~/Companent/Header/Header.vue'
import Search from '~~/Companent/Search/Search.vue'
import Sidebar from '~~/Companent/Sidebar/Sidebar.vue'
import Sponsor from '~~/Companent/Sponsor/Sponsor.vue'
import Footer from '~~/Companent/Footer/Footer.vue'
</script>

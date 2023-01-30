<template>
    <div class="ori-inner-page">
       <Header/>
   <Search/>
   <Sidebar/>			

   <section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
		<div class="container">
			<div class="ori-breadcrumb-content text-center ul-li">
				<h1>Team Deatils</h1>
				<ul>
					<li><a href="index.html">orixy</a></li>
					<li>Team Deatils</li>
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
	</section>	<section id="ori-team-details" class="ori-team-details-section position-relative">
		<div class="container">
			<div class="ori-team-details-content">
				<div class="ori-team-details-info">
					<div class="row">
						<div class="col-lg-7">
							<div class="ori-team-details-img">
								<img src="https://html.themexriver.com/Orixy/assets/img/team/tmd.png" alt="">
							</div>
						</div>
						<div class="col-lg-5">
							<div class="ori-team-details-info-text">
								<div class="ori-team-details-info-title">
									<h3>Alextina Ditarson</h3>
									<span>Backend Developer</span>
								</div>
								<div class="ori-team-details-info-list ul-li-block">
									<ul>
										<li>Responsibility: <span>Development</span></li>
										<li>experience: <span>08 Years </span></li>
									</ul>
								</div>
								<div class="ori-team-details-social">
									<h4>Social Media</h4>
									<a href="#"><i class="fab fa-facebook-f"></i></a>
									<a href="#"><i class="fab fa-twitter"></i></a>
									<a href="#"><i class="fab fa-instagram"></i></a>
									<a href="#"><i class="fab fa-youtube"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ori-team-personal-info-wrapper">
					<div class="ori-team-personal-info pera-content">
						<h3>Personal Info</h3>
						<p>Since joining Bili in 2009, Matilda has helped turn the company from a group of bright technology minds working with startups into a global Digital Product Engineering Services leader helping Fortune 500 companies on their innovation agenda. In Matilda`s time as President and CEO of company, the company has experienced explosive growth in size and revenue – all while developing a culture that fosters engaged employees around innovation.</p>
						<p>Matilda is a frequent speaker on the topics of global innovation and digital disruption. She is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.</p>
					</div>
					<div class="ori-team-personal-info pera-content">
						<h3>Career Guidelines</h3>
						<p>Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels.</p>
					</div>
					<div class="ori-team-personal-info pera-content">
						<h3>Professional Skills</h3>
						<p>For each business, we take a bespoke approach to developing change within the organisation, often with the common goal.</p>
						<div class="ori-team-professional-skill d-flex">
							<div class="ori-about-circle-progress-item">
								<div class="counter-boxed text-center headline position-relative">
									<div class="graph-outer">
										<input type="text" class="dial" data-fgColor="#FF7425" data-bgColor="#fff" data-width="180" data-height="180" data-linecap="round"  value="70" >
										<div class="inner-text count-box"><span class="count-text" data-stop="70" data-speed="4500"></span>%</div>
									</div>
									<h3 class="text-uppercase">fRONTEND</h3>
								</div>
							</div>
							<div class="ori-about-circle-progress-item">
								<div class="counter-boxed text-center headline position-relative">
									<div class="graph-outer">
										<input type="text" class="dial" data-fgColor="#FF7425" data-bgColor="#fff" data-width="180" data-height="180" data-linecap="round"  value="70" >
										<div class="inner-text count-box"><span class="count-text" data-stop="70" data-speed="4500"></span>%</div>
									</div>
									<h3 class="text-uppercase">backend</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ori-single-comment-form pera-content">
				<h3>Contact Me</h3>
				<p>Your email address will not be published. Required fields are marked * </p>
				<form action="#" method="get">
					<div class="row">
						<div class="col-lg-6">
							<label>Name</label>
							<input type="text" name="name" placeholder="John Barham">
						</div>
						<div class="col-lg-6">
							<label>Email</label>
							<input type="text" name="email" placeholder="alma.lawson@example.com">
						</div>
						<div class="col-lg-12">
							<label>Website</label>
							<input type="text" name="name" placeholder="google.fr">
						</div>
						<div class="col-lg-12">
							<label>Message</label>
							<textarea name="massege" placeholder="Simultaneously we had a problem"></textarea>
						</div>
						<div class="col-lg-12">
							<div class="ori-submit-btn text-center">
								<button type="submit">Submit Now</button>
							</div>
						</div>
					</div>
				</form>
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
   <Footer/>
   </div>

</template>
<script setup >
import Header from '~~/Companent/Header/Header.vue'
import Search from '~~/Companent/Search/Search.vue'
import Sidebar from '~~/Companent/Sidebar/Sidebar.vue'
import Footer from '~~/Companent/Footer/Footer.vue'

</script>
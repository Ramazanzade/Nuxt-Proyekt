<template>
    <div class="ori-inner-page">
       <Header/>
   <Search/>
   <Sidebar/>			

   <section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
		<div class="container">
			<div class="ori-breadcrumb-content text-center ul-li">
				<h1>Contact Us </h1>
				<ul>
					<li><a href="index.html">orixy</a></li>
					<li>Contact Us </li>
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
<div class="ori-google-map">
		<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"  height="865"></iframe>
	</div>	
	<section id="ori-contact-form" class="ori-contact-form-section position-relative">
		<div class="container">
			<div class="ori-contact-form-content">
				<div class="row">
					<div class="col-lg-6">
						<div class="ori-contact-form-text-info pera-content">
							<h3>Get a free quote now</h3>
							<p>Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec. In cursus massa tincidunt ut ornare the butter leo integer.</p>
							<div class="ori-contact-form-item-info">
								<div class="ori-contact-info d-flex align-items-center">
									<div class="info-icon d-flex align-items-center justify-content-center">
										<i class="fas fa-phone-alt"></i>
									</div>
									<div class="info-text pera-content">
										<h4>Phone</h4>
										<p>(+880)155 69569 365)</p>
									</div>
								</div>
								<div class="ori-contact-info d-flex align-items-center">
									<div class="info-icon d-flex align-items-center justify-content-center">
										<i class="fas fa-envelope"></i>
									</div>
									<div class="info-text pera-content">
										<h4>Email</h4>
										<p>debra.holt@example.com</p>
									</div>
								</div>
								<div class="ori-contact-info d-flex align-items-center">
									<div class="info-icon d-flex align-items-center justify-content-center">
										<i class="fas fa-map-marker-alt"></i>
									</div>
									<div class="info-text pera-content">
										<h4>Location</h4>
										<p>Ta-134/A, Gulshan Badda Link</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="ori-contact-form-wrap">
							 <form action="#" method="get">
							 	<label>Name *</label>
							 	<input type="text" name="name">
							 	<label>Email *</label>
							 	<input type="text" name="email" placeholder="Orixy@example.com">
							 	<label>Phone Number *</label>
							 	<input type="text" name="text" placeholder="(629) 555-0129">
							 	<label>Subject *</label>
							 	<input type="text" name="text" placeholder="web..">
							 	<label>Message *</label>
							 	<textarea name="message" placeholder="Nulla Lorem mollit cupidatat irure. Laborum magna.. "></textarea>
							 	<button type="submit">submit now</button>
							 </form>
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
   <Footer/>
   </div>

</template>
<script setup >
import Header from '~~/Companent/Header/Header.vue'
import Search from '~~/Companent/Search/Search.vue'
import Sidebar from '~~/Companent/Sidebar/Sidebar.vue'
import Footer from '~~/Companent/Footer/Footer.vue'

</script>
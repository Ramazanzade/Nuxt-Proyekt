<template>
    <div>
        <header id="ori-header" class="ori-header-section header-style-one">
		<div class="ori-header-content-area">
			<div class="ori-header-content d-flex align-items-center justify-content-between">
				<div class="brand-logo">
					<a href="#"><img src="assets/img/logo/logo1.png" alt=""></a>
				</div>
				<div class="ori-main-navigation-area">
					<nav class="ori-main-navigation clearfix ul-li">
						<ul id="main-nav" class="nav navbar-nav clearfix">
							<li class="dropdown ori-megamenu">
								<NuxtLink to="/">Home</NuxtLink>
							</li>
							<li><NuxtLink to="/Haqqinda">About</NuxtLink></li>
							<li class="dropdown">
								<NuxtLink to="/">Shop</NuxtLink>
								<ul class="dropdown-menu clearfix">
									<li><NuxtLink to="/Shop">Shop Page </NuxtLink></li>
									<li><NuxtLink to="/ShopSingle">Shop Details</NuxtLink></li>
									<li> <NuxtLink to="/Cart">Cart Page</NuxtLink></li>
									<li><NuxtLink to="/Checkout">Check Out Page</NuxtLink></li>
								</ul>
							</li>
							<li class="dropdown">
								<NuxtLink to="/">Page</NuxtLink>
								<ul class="dropdown-menu clearfix">
									<li><NuxtLink to="/Service">Services</NuxtLink></li>
									<li class="dropdown">
										 <NuxtLink to="/ServiceSingle">Services Details</NuxtLink>
										<ul class="dropdown-menu clearfix">
											<li><NuxtLink to="/ServiceSingle">Web Development</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">UI/UX  Details</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Digital Marketing</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Product Details</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Mobile Solutions</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">App Development</NuxtLink></li>
										    <li><NuxtLink to="/ServiceSingle">Email Marketing</NuxtLink></li>
										</ul>
									</li>
									<li><NuxtLink to="/Team">Team Page</NuxtLink></li>
									<li><NuxtLink to="/TeamSingle">Team Details</NuxtLink></li>
									<li><NuxtLink to="/Faq">FAQ Page</NuxtLink></li>
									<li><NuxtLink to="/Pricing">Pricing Page</NuxtLink></li>
									<li><NuxtLink to="/Contact">Contact Page</NuxtLink></li>
									<li><NuxtLink to="/Mission">Mission Page</NuxtLink></li>
								</ul>
							</li>
							<li class="dropdown">
								<NuxtLink to="/">News</NuxtLink>
								<ul class="dropdown-menu clearfix">
									<li><NuxtLink to="/Blog">News</NuxtLink></li>
									<li><NuxtLink to="/BlogSingle">News Details</NuxtLink></li>
								</ul>
							</li>
							<li class="dropdown">
								<NuxtLink to="/">Portfolio</NuxtLink>
								<ul class="dropdown-menu clearfix">
									<li><NuxtLink to="/Portfolio">Portfolio</NuxtLink></li>
									<li><NuxtLink to="/PortfolioSingle">Portfolio Details</NuxtLink></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
				<div class="ori-header-sidebar-search d-flex align-items-center">
					<div class="ori-search-btn">
						<button class="search-box-outer"><i class="fal fa-search"></i></button>
					</div>
					<div class="ori-sidenav-btn navSidebar-button">
						<button><i class="fal fa-bars"></i></button>
					</div>
				</div>
			</div>
			<div class="mobile_menu position-relative">
				<div class="mobile_menu_button open_mobile_menu">
					<i class="fal fa-bars"></i>
				</div>
				<div class="mobile_menu_wrap">
					<div class="mobile_menu_overlay open_mobile_menu"></div>
					<div class="mobile_menu_content">
						<div class="mobile_menu_close open_mobile_menu">
							<i class="fal fa-times"></i>
						</div>
						<div class="m-brand-logo">
							<a  href="https://html.themexriver.com/Orixy/!#"><img src="assets/img/logo/logo1.png" alt=""></a>
						</div>





						<nav class="mobile-main-navigation  clearfix ul-li">
							<ul id="m-main-nav" class="nav navbar-nav clearfix">
								<li class="dropdown ori-megamenu">
									<NuxtLink to="/">Home</NuxtLink>
									<ul class="dropdown-menu clearfix">
										<li>
											<div class="ori-megamenu-content">
												<div class="ori-megamenu-item-wrap">
													<div class="row justify-content-center">
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm1.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="index-1.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-1.1.html">One Page</a>
																	</div>
																</div>
																<h3>Digital Studio</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm2.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-2.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-2.1.html">One Page</a>
																	</div>
																</div>
																<h3>App Landing</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm3.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-3.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-3.1.html">One Page</a>
																	</div>
																</div>
																<h3>Marketing Agency</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm4.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-4.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-4.1.html">One Page</a>
																	</div>
																</div>
																<h3>SEO Marketing</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm5.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-5.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-5.1.html">One Page</a>
																	</div>
																</div>
																<h3>Insurance</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm6.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-6.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-6.1.html">One Page</a>
																	</div>
																</div>
																<h3>Digital Marketing</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm7.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-7.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-7.1.html">One Page</a>
																	</div>
																</div>
																<h3>Digital Agency</h3>
															</div>
														</div>
														<div class="col-md-3">
															<div class="ori-megamenu-item position-relative">
																<div class="ori-megamenu-item-btn position-relative">
																	<img src="https://html.themexriver.com/Orixy/assets/img/gallery/dm8.jpg" alt="">
																	<div class="ori-menu-btn-grp text-center">
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-8.html">Multi Page</a>
																		<a target="_blank" href="https://html.themexriver.com/Orixy/index-8.1.html">One Page</a>
																	</div>
																</div>
																<h3>Agency</h3>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li><NuxtLink to="/Haqqinda">About</NuxtLink></li>
								<li class="dropdown">
									<NuxtLink to="/">Shop</NuxtLink>
									<ul class="dropdown-menu clearfix">
										<li><NuxtLink to="/Shop">Shop Page </NuxtLink></li>
									<li><NuxtLink to="/ShopSingle">Shop Details</NuxtLink></li>
									<li> <NuxtLink to="/Cart">Cart Page</NuxtLink></li>
									<li><NuxtLink to="/Checkout">Check Out Page</NuxtLink></li>
									</ul>
								</li>
								<li class="dropdown">
									<NuxtLink to="/">Pages</NuxtLink>
									<ul class="dropdown-menu clearfix">
										<li><NuxtLink to="/Service">Services</NuxtLink></li>
										<li class="dropdown">
											<NuxtLink to="/ServiceSingle">Services Details</NuxtLink>
											<ul class="dropdown-menu clearfix">
												<li><NuxtLink to="/ServiceSingle">Web Development</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">UI/UX  Details</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Digital Marketing</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Product Details</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">Mobile Solutions</NuxtLink></li>
											<li><NuxtLink to="/ServiceSingle">App Development</NuxtLink></li>
										    <li><NuxtLink to="/ServiceSingle">Email Marketing</NuxtLink></li>
											</ul>
										</li>
										<li><NuxtLink to="/Team">Team Page</NuxtLink></li>
									<li><NuxtLink to="/TeamSingle">Team Details</NuxtLink></li>
									<li><NuxtLink to="/Faq">FAQ Page</NuxtLink></li>
									<li><NuxtLink to="/Pricing">Pricing Page</NuxtLink></li>
									<li><NuxtLink to="/Contact">Contact Page</NuxtLink></li>
									<li><NuxtLink to="/Mission">Mission Page</NuxtLink></li>
									</ul>
								</li>
								<li class="dropdown">
									<NuxtLink to="/">News</NuxtLink>
									<ul class="dropdown-menu clearfix">
										<li><NuxtLink to="/Blog">News</NuxtLink></li>
									<li><NuxtLink to="/BlogSingle">News Details</NuxtLink></li>
									</ul>
								</li>
								<li class="dropdown">
								<NuxtLink to="/">Portfolio</NuxtLink>
								<ul class="dropdown-menu clearfix">
									<li><NuxtLink to="/Portfolio">Portfolio</NuxtLink></li>
									<li><NuxtLink to="/PortfolioSingle">Portfolio Details</NuxtLink></li>
								</ul>
							</li>
							</ul>
						</nav>




					</div>
				</div>
			</div>
		</div>
	</header>
    </div>
</template>


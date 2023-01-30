<template>
    <div class="ori-inner-page">
       <Header/>
   <Search/>
   <Sidebar/>			
   <section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
		<div class="container">
			<div class="ori-breadcrumb-content text-center ul-li">
				<h1>Cart</h1>
				<ul>
					<li><a href="index.html">orixy</a></li>
					<li>Cart</li>
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

<section id="ori-cart" class="ori-cart-section position-relative">
		<div class="container">
			<div class="ori-cart-content-area">
				<div class="ori-cart-content-table table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th class="product-name"></th>
								<th class="product-name">Product</th>
								<th class="product-price">Price</th>
								<th class="product-quantity">Quantity</th>
								<th class="product-subtotal">Subtotal</th>
								<th class="product-subtotal"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="ori-cart-product-img">
									<div class="product-thumbnail position-relative"> <a href="#"><img src="https://html.themexriver.com/Orixy/assets/img/shop/ps1.png" alt=""></a>
									</div>
								</td>
								<td class="product-name" data-title="Product">
									<a href="#">Table Chair Couch..</a>
								</td>
								<td class="product-price product-subtotal" data-title="Price"> <span class=" amount"><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td>
									<div class="quantity-field position-relative  d-inline-block">
										<input type="text" name="select1" value="1" class="quantity-input-arrow quantity-input-2  text-center">
									</div>
								</td>
								<td class="product-price product-subtotal"> <span><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td class="product-remove"><a href="#"><i class="fal fa-times"></i></a></td>
							</tr>
							<tr>
								<td class="ori-cart-product-img">
									<div class="product-thumbnail position-relative"> <a href="#"><img src="https://html.themexriver.com/Orixy/assets/img/shop/ps2.png" alt=""></a>
									</div>
								</td>
								<td class="product-name" data-title="Product">
									<a href="#">Table Chair Couch..</a>
								</td>
								<td class="product-price product-subtotal" data-title="Price"> <span class=" amount"><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td>
									<div class="quantity-field position-relative  d-inline-block">
										<input type="text" name="select1" value="1" class="quantity-input-arrow quantity-input-2  text-center">
									</div>
								</td>
								<td class="product-price product-subtotal"> <span><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td class="product-remove"><a href="#"><i class="fal fa-times"></i></a></td>
							</tr>
							<tr>
								<td class="ori-cart-product-img">
									<div class="product-thumbnail position-relative"> <a href="#"><img src="https://html.themexriver.com/Orixy/assets/img/shop/ps3.png" alt=""></a>
									</div>
								</td>
								<td class="product-name" data-title="Product">
									<a href="#">Table Chair Couch..</a>
								</td>
								<td class="product-price product-subtotal" data-title="Price"> <span class=" amount"><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td>
									<div class="quantity-field position-relative  d-inline-block">
										<input type="text" name="select1" value="1" class="quantity-input-arrow quantity-input-2  text-center">
									</div>
								</td>
								<td class="product-price product-subtotal"> <span><bdi><span class="Price-currencySymbol">$</span>100.00</bdi></span></td>
								<td class="product-remove"><a href="#"><i class="fal fa-times"></i></a></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="ori-cart-coupon-update d-flex justify-content-between">
					<div class="ori-cart-coupon">
						<form action="#" method="get">
							<input type="text" name="code" placeholder="Coupon Code">
							<button type="submit">apply coupon</button>
						</form>
					</div>
					<div class="cart-update-btn text-uppercase">
						<a href="#">update cart</a>
					</div>
				</div>
			</div>
			<div class="ori-cart-total-wrapper d-flex justify-content-end">
				<div class="ori-cart-total-area pera-content">
					<h3>Cart Totals</h3>
					<table>
						<tbody>
							<tr>
								<td>
									<p class="v-title">Subtotal	</p>
								</td>
								<td>
									<p class="v-price">	£245.00</p>
								</td>
							</tr>
							<tr>
								<td>
									<p class="v-title">Total</p>
								</td>
								<td>
									<p class="v-price">	£245.00</p>
								</td>
							</tr>
						</tbody>
					</table>
					<a class="d-flex justify-content-center align-items-center text-uppercase" href="https://html.themexriver.com/Orixy/checkout.html">Procced To Checkout</a>
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
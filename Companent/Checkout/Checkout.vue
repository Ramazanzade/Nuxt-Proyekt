<template>
    <div class="ori-inner-page">
       <Header/>
   <Search/>
   <Sidebar/>			

   <section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
		<div class="container">
			<div class="ori-breadcrumb-content text-center ul-li">
				<h1>Checkout </h1>
				<ul>
					<li><a href="#">orixy</a></li>
					<li>Checkout </li>
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
<section id="ori-checkout" class="ori-checkout-section position-relative">
		<div class="container">
			<div class="ori-checkout-coupon">
				<div class="ori-coupon-check">
					<input type="checkbox" name="coupon"><span>Have a coupon? <a href="#"> Click here to enter your code</a></span> 
				</div>
				<div class="ori-checkout-coupon-code pera-center">
					<p>If you have a coupon code, please apply it below.</p>
					<form action="#" method="get">
						<input type="text" name="code" placeholder="Coupon Code">
						<button type="submit">Apply Coupon</button>
					</form>
				</div>
			</div>
			<div class="ori-checkout-billing-order-details">
				<div class="row">
					<div class="col-lg-6">
						<div class="ori-checkout-billing-details">
							<h3>Billing details</h3>
							<form action="#" method="get">
								<label>First name *</label>
								<input type="text" name="name"> 
								<label>Last name *</label>
								<input type="text" name="name">
								<label>Company name (optional)</label>
								<input type="text" name="name">
								<label>Country / Region *</label>
								<select name="#">
									<option value="#">United States(US)</option>
									<option value="#">United Kingdom(UK)</option>
									<option value="#">Spain(ESP)</option>
									<option value="#">France(FRA)</option>
								</select>   
								<label>Street address *</label>
								<input type="text" name="name" placeholder="House number and street name">
								<input type="text" name="name" placeholder="Apartment, suite, unit, etc. (otional)">
								<label>Town / City *</label>
								<input type="text" name="name">
								<label>State *</label>
								<select name="#">
									<option value="#">California</option>
									<option value="#">Newyork</option>
									<option value="#">Washington</option>
									<option value="#">Florida</option>
								</select> 
								<label>ZIP Code *</label>
								<input type="text" name="name">
								<label>Phone *</label>
								<input type="text" name="name"> 
								<label>Email address *</label>
								<input type="email" name="eamil">
								<div class="additional-info">
									<h4>Additional information</h4>
									<p>Order notes (optional)</p>
									<textarea name="info" placeholder="Notes about you order,e.g special notes for delivery."></textarea>
								</div>   
							</form>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="ori-checkout-order-details">
							<h3>Your order</h3>
							<div class="order-details-info pera-content">
								<table>
									<thead>
										<tr>
											<th>Product</th>
											<th>Subtotal</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Subtotal</td>
											<td class="p-value">$100.00</td>
										</tr>
										<tr>
											<td>Subtotal</td>
											<td class="p-value">$100.00</td>
										</tr>
										<tr>
											<td>total</td>
											<td class="p-value">$100.00</td>
										</tr>
									</tbody>
								</table>
								<p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
								<div class="place-order-btn text-center text-uppercase">
									<a href="#">Place order</a>
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
   <Footer/>
   </div>

</template>
<script setup >
import Header from '~~/Companent/Header/Header.vue'
import Search from '~~/Companent/Search/Search.vue'
import Sidebar from '~~/Companent/Sidebar/Sidebar.vue'
import Footer from '~~/Companent/Footer/Footer.vue'

</script>
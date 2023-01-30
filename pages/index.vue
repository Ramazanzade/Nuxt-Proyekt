<template>
<div>
    <Header/>
	<Search/>
	<Sidebar/>
	<Slider/>				
<Service/>
<Sponsor/>				
<Project/>
	<Textscroll/>	
<Team/>
<Testimonial/>				
<Textscroll2/>		
<Blog/>
    <Footer/>

</div>
</template>

<script >
import Header from '~~/Companent/Header/Header.vue'
import Service from '~~/Companent/Service/Service.vue'
import Search from '~~/Companent/Search/Search.vue'
import Sidebar from '~~/Companent/Sidebar/Sidebar.vue'
import Slider from '~~/Companent/Slider/Slider.vue'
import Sponsor from '~~/Companent/Sponsor/Sponsor.vue'
import Team from '~~/Companent/Team/Team.vue'
import Testimonial from '~~/Companent/Testimonial/Testimonial.vue'
import Textscroll from '~~/Companent/Text scroll/Textscroll.vue'
import Textscroll2 from '~~/Companent/Text scroll/Textscroll2.vue'
import Project from '~~/Companent/Project/Project.vue'
import Blog from '~~/Companent/Blog/Blog.vue'
// import About from '~~/Companent/About/About.vue'
import Footer from '~~/Companent/Footer/Footer.vue'



 export default{
	components:{
		Header:Header,
		Service:Service,
		Search:Search,
		Sidebar:Sidebar,
		Slider:Slider,
		Sponsor:Sponsor,
		Team:Team,
		Testimonial:Testimonial,
		Textscroll:Textscroll,
		Textscroll2:Textscroll2,
		Project:Project,
		Blog:Blog,
		// About:About,
		Footer:Footer
	}
 }


definePageMeta({
  layout : "default",
})
</script>



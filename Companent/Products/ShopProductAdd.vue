<template>
    <div class="ori-inner-page">



        <form class="inpe"   @submit.prevent="send">

  <div >
    <div class="inp">
    <label class="lable" for="">Img</label>
    <input  type="file" class="form" >
  </div>
  <div class="inp">
    <label class="lable"  for="">Product Name</label>
    <input  type="text" class="form" v-model="product.name" aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Price</label>
    <input  type="price" v-model="product.price" class="form"  aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">SKU</label>
    <input  type="text" class="form" v-model="product.sku"  aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Catogory</label>
    <select name="Catogory" id="Catogory">
    <option value="Geyim">Geyim</option>
    <option value="Music">Music</option>
    <option value="Qida">Qida</option>
    <option value="Elektorinika">Elektorinika</option>
    <option value="Meyset">Meyset</option>
    <option value="Diger">Diger</option>
   

  </select>
  </div>
  </div>
 


  <div> 
    <div class="inp">
    <label class="lable" for="">Tag</label>
    <input  type="text" class="form" v-model="product.tag" aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Description</label>
    <input  type="text" class="form" v-model="product.description"  aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Review</label>
    <input  type="text" class="form" v-model="product.review" aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Information</label>
    <input  type="text" class="form" v-model="product.information" aria-describedby="emailHelp">
  </div>
  <div class="inp">
    <label class="lable" for="">Faq</label>
    <input  type="text" class="form" v-model="product.faq" aria-describedby="emailHelp">
  </div>
  <button  class="btn btn-primary">Submit</button>
</div>
  




  
</form>




    </div>
</template>

<script>


export default ({
 
data(){
  return{
     product :{
img:"",
name:"",
price:"",
sku:"",
category:"",
tag:"",
description:"",
review:"",
information:"",
faq:"",

    }
  }
},


methods:{
  send(){
this.$store.dispatch('addproductaction', this.product)   
 }
}

})
</script>


<style scoped>
.form{
  
    margin: 30px;
   
}
.inpe{
  display: flex;
    flex-direction: row;
    justify-content: center;
margin: 20px;}
.inp{
    display: flex;
    flex-direction: row;
align-items: center;
padding: 20px;
}
#Catogory{
  margin: 30px;

}

</style>
import { createStore } from "vuex";
import axios from 'axios'

export const shopeproduct = createStore({

namespaced: true,


    state:{
       product:[]
    },
    getters:{
        addproductgetters(state){
            return{
                allproductgetters:state.product
            }
        }
        },
    
    mutations:{
   
    },
    actions:{
       
addproductaction({state, commit}, payload){
    axios.post('https://product-ee87f-default-rtdb.firebaseio.com/product.json', payload)
    .then(({data})=>{
payload.id=data.name;
state.product.push(payload)
    })
},

getproduct({state,commit}, payload){
    axios.get('https://product-ee87f-default-rtdb.firebaseio.com/product.json', payload)
    .then( ({data})=>{
for(let key in data){
    data[key].id=key 
    state.product.push(data[key])
}
    })
}

    }
})
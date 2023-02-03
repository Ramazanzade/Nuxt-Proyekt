import { createStore } from 'vuex'
import {login} from './Modules/login'
import {shopeproduct} from './Modules/shopeproduct'

export const store = createStore({
    modules:{
login,
shopeproduct
    }
})
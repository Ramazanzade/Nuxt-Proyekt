import { createStore } from 'vuex'
import {login} from './Modules/login'

export const store = createStore({
    modules:{
login,
    }
})
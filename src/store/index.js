import { createStore } from 'vuex'
import modal from './modules/modal'

export default createStore({
  state: {
    url:''
  },
  getters: {
  },
  modules: {
    modal
  }
})

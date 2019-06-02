import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
  	bannerList:{},
  	kindItem:[],
  },
  mutations:{
   storeBanner(state,bannerList){
   	state.bannerList=bannerList
   },
   stateKindItem(state,kindItem){
    state.kindItem=kindItem
   }
}
})
<template>
  <div class="mobileServer">   
     <Map></Map>
     <Footer/>
  </div>
</template>
<script>
import Footer from "@/components/public/footer";
import Map from '@/components/public/map'
export default {
  name: 'serviceCenter',
  components:{Map,Footer},
  data () {
    return {
   
    }
  },
  methods:{
},
computed:{
   
  },
 mounted(){
    
  }
}
</script>
<style scoped lang="less">

</style>
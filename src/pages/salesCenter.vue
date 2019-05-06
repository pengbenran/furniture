<template>
  <div class="containt">
   这是销售中心页面 
  </div>
</template>
<script>
export default {
  name: 'salesCenter',
  data () {
    return {
     
    }
  },
  methods:{
  	menu() {
  		this.isScroll = window.scrollY>0;
  	}
  },
   mounted(){
    window.addEventListener('scroll', this.menu)
  }
}
</script>
<style scoped>

</style>
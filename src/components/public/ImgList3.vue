<template>
  <div class="content">
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot1.png" alt="..."></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot2.png" alt="..."></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot3.png" alt="..."></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot4.png" alt="..."></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot5.png" alt="..."></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot6.png" alt="..."></a></div>
  </div>
</template>
<script>
export default {
    props:{
    
    },
    data () {
        return {

        }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productwarp`
            })
        }
    }
}
</script>
<style scoped lang="less">
.content{display: flex;justify-content: space-around;flex-wrap: wrap;}
.Lits img{width: 100%;}
.Lits{margin-top: 30px;width: 33%;}
.Lits:hover{border: 1px solid #ccc;}
a{display: inline-block;position: relative;}
</style>

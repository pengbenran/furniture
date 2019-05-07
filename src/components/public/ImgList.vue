<template>
  <div class="content">
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot1.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot2.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot3.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot4.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot5.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
   <div class="Lits" @click="to"><a href="javascript:;"><img src="static/images/productCenter/hot6.png" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />北欧风椅子</span></div></a></div>
  </div>
</template>
<script>
export default {
    props:{
      ImgListData:{
          type:Array,
          default:[]
      }
    },
    data () {
        return {

        }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productInfo`
            })
        }
    }
}
</script>
<style scoped lang="less">
.content{display: flex;justify-content: space-around;flex-wrap: wrap;}
.Lits img{width: 100%;}
.Lits{margin-top: 30px;width: 33%;}
a{display: inline-block;position: relative;}
.hotMask{z-index: 2;position: absolute;left: 0;top: 0;height: 100%;width: 100%;background: rgba(227, 227, 227, 0.8);opacity: 0;transition: all 0.3s;}
a:hover .hotMask{opacity: 1;}
.hotMask span{position: absolute;top: 48%;width: 100%;display: block;left: 0;color: #0d7569;}
.hotMask img{width: 25px;height: 25px;margin-right: 4px;}
</style>

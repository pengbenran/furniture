<template>
  <div class="content">
   <div class="Lits" v-for="(item,index) in List" @click='jumpToProductDetail(item.id)'><a href="javascript:;"><img :src="item.lordImg" alt="..."></a></div>
  </div>
</template>
<script>
export default {
    props:['List'],
    data () {
        return {

        }
    },
    methods: {
    jumpToProductDetail(id){
      let that=this
      // productDetail
      that.$router.push({
        path:`/productDetail?id=${id}`
      })
    },
    }
}
</script>
<style scoped lang="less">
.content{display: flex;flex-wrap: wrap;}
.Lits img{width: 100%;}
.Lits{margin-top: 5px;width: 33%;margin-right: 0.3%;}
.Lits:hover{border: 1px solid #ccc;}
a{display: inline-block;position: relative;width: 100%;height: 100%;}
</style>

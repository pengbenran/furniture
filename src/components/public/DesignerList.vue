<template>
  <div class="content">
    <div class="Lits"v-for="(item,index) in List" @click='jumpToProductDetail(item.id)'>
    <a href="javascript:;"><img :src="item.lordImg" alt="...">
      <div class="hotMask">
        <span>{{item.name}}</span> 
      </div>
    </a>
  </div>
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
.Lits img{width: 98%;}
.Lits{margin-top: 10px;width: 33%;}
a{display: inline-block;position: relative;width: 100%;}
.hotMask{z-index: 2;position: absolute;left: 1%;bottom: 0;height:66px;width: 98%;background: rgba(227, 227, 227, 0.8);opacity: 0;transition: all 0.3s;color:#000;box-sizing: border-box;line-height: 66px;padding: 0 25px 0 10px;box-sizing: border-box;font-size: 18px;font-weight: bold;display: flex;justify-content: space-between;}
a:hover .hotMask{opacity: 1;}
</style>

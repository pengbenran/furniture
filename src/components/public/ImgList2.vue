<template>
  <div class="content">
   <div class="Lits" @click="to(item.id)"  v-for="(item,index) in goodArry">
    <a href="javascript:;"><img :src="item.imgUrls[0]" alt="...">
      <div class="hotMask">
        <span>{{item.name}}</span>
        <span><img src="../../assets/cat.png" /></span>
      </div>
    </a>
  </div>
  </div>
</template>
<script>
export default {
    props:['goodArry'],
    data () {
        return {

        }
    },
    methods: {
        to(id){
            this.$router.push({
                path:`/productInfo?id=${id}`
            })
        }
    }
}
</script>
<style scoped lang="less">
.content{display: flex;flex-wrap: wrap;}
.Lits img{width: 100%;}
.Lits{margin-top: 30px;width: 33%;}
a{display: inline-block;position: relative;}
.hotMask{z-index: 2;position: absolute;left: 0;bottom: 0;height:66px;width: 100%;background: rgba(227, 227, 227, 0.8);opacity: 0;transition: all 0.3s;color:#000;box-sizing: border-box;line-height: 66px;padding: 0 25px 0 10px;font-size: 18px;font-weight: bold;display: flex;justify-content: space-between;}
a:hover .hotMask{opacity: 1;}
</style>

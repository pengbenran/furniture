<template>
  <div class="content">
   <div class="Lits" @click="to(item.id)" v-for="(item,index) in goodArry"><a href="javascript:;"><img :src="item.imgUrls[0]" alt="..."><div class="hotMask"><span><img src="../../assets/cat.png" />{{item.name}}</span></div></a></div>
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
            this.$router.push({ path: '/productInfo', query: {id:id}})
        }
    }
}
</script>
<style scoped lang="less">
.content{display: flex;flex-wrap: wrap;justify-content: space-between;}
.Lits img{width: 100%;}
.Lits{margin-top: 10px;width: 33%;}
a{display: inline-block;position: relative;}
.hotMask{z-index: 2;position: absolute;left: 0;top: 0;height: 100%;width: 100%;background:#e3e3e3;opacity: 0;transition: all 0.3s;font-size: 18px;color:#0c3e38;}
a:hover .hotMask{opacity: 0.8;}
.hotMask span{position: absolute;top: 48%;width: 100%;display: block;left: 0;color: #0d7569;}
.hotMask img{width: 25px;height: 25px;margin-right: 4px;}
</style>

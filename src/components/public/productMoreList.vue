<template>
  <div class="content">
   <div class="Lits" v-for="(item,index) in selectDecorate.imgUrls"><a href="javascript:;"><img :src="item" alt="..."></a></div>
  </div>
</template>
<script>
export default {
    props:['selectDecorate'],
    data () {
        return {

        }
    },
    methods: {
      
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

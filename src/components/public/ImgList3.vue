<template>
  <div class="content">
   <div class="Lits" v-for="(item,index) in imgReels"><a href="javascript:;"><img :src="item" alt="..."></a></div>
  </div>
</template>
<script>
export default {
    props:['imgReels'],
    data () {
        return {

        }
    },
    methods: {
       
    }
}
</script>
<style scoped lang="less">
.content{display: flex;flex-wrap: wrap;padding-top: 50px;box-sizing: border-box;}
.Lits img{width: 100%;}
.Lits{margin-bottom: 5px;width: 33%;margin-right: 0.3%}
.Lits :hover{border: 1px solid #ccc;}
a{display: inline-block;position: relative;width: 100%;}
</style>

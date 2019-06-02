<template>
  <div class="content">
   <div class="Lits" @click="to(item.id,item.type)"  v-for="(item,index) in goodArry">
    <a href="javascript:;"><img :src="item.imgUrls[0]" alt="...">
      <div class="hotMask">
        <span v-if="item.type==1">{{item.name}}</span>
        <span v-if="item.type==2" style="text-align: center;display: inline-block;width: 100%">{{item.name}}</span>
        <span v-if="item.type==1"><img src="../../assets/cat.png" /></span>
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
        to(id,type){
          let that=this
          if(type==2){
            that.$router.push({
                path:`/productwarp?id=${id}`
            })
          }else{
            that.$router.push({
                path:`/productInfo?id=${id}`
            })
          }
            
        }
    }
}
</script>
<style scoped lang="less">
.content{display: flex;flex-wrap: wrap;}
.Lits img{width: 98%;}
.Lits{margin-top: 10px;width: 33%;}
a{display: inline-block;position: relative;}
.hotMask{z-index: 2;position: absolute;left: 1%;bottom: 0;height:66px;width: 98%;background: rgba(227, 227, 227, 0.8);opacity: 0;transition: all 0.3s;color:#000;box-sizing: border-box;line-height: 66px;padding: 0 25px 0 10px;box-sizing: border-box;font-size: 18px;font-weight: bold;display: flex;justify-content: space-between;}
a:hover .hotMask{opacity: 1;}
</style>

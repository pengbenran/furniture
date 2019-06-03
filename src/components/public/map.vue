<template>
    <div>
             <div class="container Map">
       <img src="../../assets/images/serviceCenter/map.png" />
       <div class="MapF">
        <div class="icon" @mouseenter.self="mouseEnter(1)" @mouseleave.self="mouseLeave(1)"><img src="../../assets/images/serviceCenter/mapf.png"/></div>
        <div class="sj" v-show="isShow==1"></div>
        <div class="addressInfo" v-show="isShow==1">
           地址:四川省成都市金牛区天力商务楼501
         </div>
       </div>
      <div class="MapF MapF1">
        <div class="icon" @mouseenter.self="mouseEnter(2)" @mouseleave.self="mouseLeave(2)"><img src="../../assets/images/serviceCenter/mapf.png"/></div>
        <div class="sj" v-show="isShow==2"></div>
        <div class="addressInfo" v-show="isShow==2">
           地址:邢台市桥东区泉北东大街88号
         </div>
       </div>
        <div class="MapF MapF2">
        <div class="icon" @mouseenter.self="mouseEnter(3)" @mouseleave.self="mouseLeave(3)"><img src="../../assets/images/serviceCenter/mapf.png"/></div>
        <div class="sj" v-show="isShow==3"></div>
        <div class="addressInfo" v-show="isShow==3">
           地址:南宁市青秀区凤岭南路6-6号
         </div>
       </div>
     </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
          isShow:0,
        }
    },
    mounted(){

    },
    methods: {
        mouseEnter(e){
          this.isShow=e
        },
        mouseLeave(e){
          this.isShow=e
        },
    },
}
</script>
<style scoped  lang="less">
.Map{position: relative;padding: 4rem;}
.Map img{width: 70%;}
.MapF{position: absolute;top: 54%;left: 45%;display:flex;
  .sj{
    height:0;
    width:0;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color:transparent #E6E6E6 transparent transparent;
    border-style:solid dashed solid dashed;
    border-width:20px;
    margin-top:20px;
  }
 .addressInfo{
  background: #fff;
  opacity: 0.8;
  height: 80px;
  background: #E6E6E6;
  font-size: 14px;
  padding:30px 10px;
  box-sizing: border-box;
 }
}
.MapF1{position: absolute;top: 38%;left: 61%;}
.MapF2{position: absolute;top: 74%;left: 55%;}
</style>

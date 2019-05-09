<template>
  <div class="containt">
    <Header :curretIndex="index"/>
    <!--header end-->

    <div class="main">
        <div class="mainWarp">
          <strong>{{selectCorporate.titile}}</strong>
          <div class="info">
            {{selectCorporate.content}}
          </div>
      </div>
      <div class="main_Tab">
      <span v-for="(item,index) in corporate" :class="selectIndex==index?'list-on':''" @click="changTab(index)">{{item.titile}}</span>
      </div>
    </div>
    <!--main end-->
   <Footer/>
   <!--footer end-->
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
export default {
  name: 'corporateCulture',
  components:{Header,Footer},
  data () {
    return {
     index:1,
     selectIndex:0,
     corporate:[
     {
      titile:'企业简介',
      content:'你可能曾经这么想过，如果我一个小时可以挣100块那我每天多工作一小时是不是就可以多挣100块，于是我在拼命加班，挣那个加班费，或者接些私活，熬夜挣个辛苦钱。现在千万不要有这种想法了，你拼了命加班，一天也不会超过24小时，更何况大部分公司是没有加班费的。不要再去接那些私活了，你接的私活基本都是那些你驾轻就熟的，做了一遍又一遍，并不会有什么提升。你要开始思考怎么提升你的单位时间价值，让你的一小时可以挣更多的钱。'
     },
       {
      titile:'产品理念',
      content:'现在千万不要有这种想法了，你拼了命加班，一天也不会超过24小时，更何况大部分公司是没有加班费的。不要再去接那些私活了，你接的私活基本都是那些你驾轻就熟的，做了一遍又一遍，并不会有什么提升。你要开始思考怎么提升你的单位时间价值，让你的一小时可以挣更多的钱。'
     },  {
      titile:'企业实力',
      content:'你可能曾经这么想过，如果我一个小时可以挣100块那我每天多工作一小时是不是就可以多挣100块，于是我在拼命加班，挣那个加班费，或者接些私活，熬夜挣个辛苦钱。现在千万不要有这种想法了，你拼了命加班，一天也不会超过24小时，更何况'
     }
     ]
    }
  },
  computed:{
    selectCorporate(){
      let that=this
      return that.corporate[that.selectIndex]
    }
  },
  methods:{
    changTab(index){
      let that=this
      that.selectIndex=index
    },
  },
  mounted(){
  }
}
</script>
<style scoped>
.main{background-image: url('../assets/images/corporateCulture/bg.png');background-size: cover;width:100%;}
.mainWarp{height: 530px;width:42%;background: rgba(255, 255, 255, 0.45);margin-top: 200px;margin-bottom: 150px;}
.main{position: relative;display: flex;align-items: center;justify-content: center;}
.main strong{display: block;font-size: 22px;padding: 20px 0;text-align: center;}
.main .info{padding: 0 50px; text-indent: 25px;}
.main_Tab{width: 42%;background: rgba(000, 000, 000, 0.45);position:absolute;bottom:0;padding: 15px 0 8px;display: flex;justify-content: space-around;}
.main_Tab span{display: inline-block;font-size: 18px;color: #fff;}
@media (max-width: 768px) { 
  .mainWarp{width: 80%;}
  .main_Tab{width: 80%;}
  .main .info{padding: 0 20px;}
 }
 .main_Tab .list-on{
  color:#379589;
 }
</style>

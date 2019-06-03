<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark"/>
    <Banner ref='banner'/>
    
    <div class='container Main'>
        <div class="nav">
          <span>川音酒店</span>
          <span>川音酒店</span>
          <span>川音酒店</span>
        </div>   
    </div>

        <div class="BgInfo" >
        <div class="BgImg">
          <img src="../assets/images/home/desigen1.png"/>
        </div>
           <div class="Info">
             <div>
             <label>川音酒店</label>
             <div>
               你好世界川音酒店，世界也不是你想的那样的。我希望这是一个充满希望的世界，每一个人都平平安安的这就世界就和平了。
               你好世界川音酒店，世界也不是你想的那样的。我希望这是一个充满希望的世界，每一个人都平平安安的这就世界就和平了
             </div>
             </div>
           </div>
        </div>  

        <div class="container Case">
          <ul>
            <li><img src="../assets/images/home/company.png"/></li>
            <li><img src="../assets/images/home/company.png"/></li>
            <li><img src="../assets/images/home/company.png"/></li>
            <li><img src="../assets/images/home/company.png"/></li>
          </ul>
        </div>



    <Footer/>   
    <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
import erCode from '@/components/public/erCode'
import Api from '@/Api/kind'
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,erCode},
  data () {
    return {
      index:3,


    }
  },
  methods:{
    showMark(){
     this.$refs.erCode.openMark();
   },

},
 mounted(){
   let that=this
   that.$refs.banner.getBannerList()

  }
}
</script>
<style scoped lang="less">
.Main{
  margin-top: 5rem;margin-bottom: 3rem;
}
.Main .nav{
  display: flex;justify-content: center;
  span{margin: 0 2rem;}
}
.BgInfo{
  position: relative; height: 35rem;margin-bottom: 5rem;
  .BgImg{height: 100%;width: 100%;}
  .BgImg img{height: 100%;width: 100%;}
  .Info{background: rgba(255, 255, 255, 0.35);width: 90%;margin-left: 5%;position: absolute;top: 30%;padding: 5rem 2rem;}
}

.Case{
  ul{display: flex;flex-wrap: wrap;list-style-type:none;}
  li{width: 33%;margin-bottom: 1rem;}
  li img{width: 100%;height: 100%;padding: 0 .5rem;}
}

</style>
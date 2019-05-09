<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" :isScroll='isScroll'/>
    <Banner/>
    <main>
    
      <div class="productKind">
        <div class="KindList">轻北欧风</div>
        <div class="KindList">精致北欧风</div>
        <div class="KindList">经典北欧风</div>
      </div>  


      <div class="container hotProduct">
       <div class="HotTitle"><img src="../assets/images/productCenter/icon.png"><span>轻北欧风</span></div>
       <div ><ImgList  :ImgListData="ImgListData"/></div> 
       <div class="btn"><img src="../assets/images/productCenter/more.png"></div>
      </div>
      <!--热销产品 end-->
      <div class="container hotProduct">
       <div class="HotTitle"><img src="../assets/images/productCenter/icon.png"><span>精致北欧风</span></div>
       <div><ImgList  :ImgListData="ImgListData"/></div> 
       <div class="btn"><img src="../assets/images/productCenter/more.png"></div>
      </div>
       <div class="container hotProduct">
       <div class="HotTitle"><img src="../assets/images/productCenter/icon.png"><span>经典北欧风</span></div>
       <div><ImgList  :ImgListData="ImgListData"/></div> 
       <div class="btn"><img src="../assets/images/productCenter/more.png"></div>
      </div>
    </main>

    <Footer/>   
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
import ImgList from "@/components/public/ImgList"
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,ImgList},
  data () {
    return {
      index:3,
      isScroll:false,
       ImgListData:[{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},
                {ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1}
       ],
    }
  },
  methods:{
   menu() {
    this.isScroll = window.scrollY>0;
  },
  to(){
            this.$router.push({
                path:`/productInfo`
            })
        }
},
 mounted(){
    window.addEventListener('scroll', this.menu)
  }
}
</script>
<style scoped lang="less">
.productKind{display: flex;width: 80%;margin: 60px auto;
  .KindList{flex-grow: 1;text-align: center;font-weight: bold;}
 }
.hotProduct{margin-bottom: 6rem;}
.HotTitle img{vertical-align: top;}
.HotTitle span{padding: 0 1rem;letter-spacing:10px;font-size: 1.2rem;line-height: 28px;}
.HotTitle .btn{margin-top: 30px;}
</style>
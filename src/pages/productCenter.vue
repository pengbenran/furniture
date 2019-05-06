<template>
  <div class="containt mobileProduct">
    <Header/>
    <Banner/>
    <main>
      <div class="container Recommend">
        <div class="RecommendInfo">
          <div>
            <strong class="tit"><span>特别</span>推荐</strong>
            <div class="Price">
              <p>L O C K 铁制书桌灯</p>
              <span>销量：18</span>
              <span>￥ 124</span>
            </div>
            <div class="info">
              <strong>商品详情</strong>
              <ul>
                <li>LOCK</li>
                <li>长 27 * 宽 18 * 高 53cm</li>
                <li>灯体 ： 黑色&nbsp;&nbsp;&nbsp;&nbsp;灯罩：透明</li>
                <li>灯体 ： 黑色&nbsp;&nbsp;&nbsp;&nbsp;灯罩：透明</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="RecommendList"><img src="../../static/images/productCenter/recommend1.png" /></div>
        <div class="RecommendList"><img src="../../static/images/productCenter/recommend2.png" /></div>
      </div>
      <!--特别推荐 end-->

      <div class="container hotProduct">
       <div class="HotTitle"><span>热销产品</span></div>
       <div ><ImgList  :ImgListData="ImgListData"/></div> 
      </div>
      <!--热销产品 end-->

      <div class="container hotProduct">
       <div class="HotTitle"><span>网红家具</span></div>
       <div><ImgList  :ImgListData="ImgListData"/></div> 
      </div>
      <!--网红家具 end-->

      <div class="container Nordic">
        <div class="HotTitle"><span>热销产品</span></div>
        <div class="row">
          <div class="col-md-6 left"><img src="../../static/images/productCenter/nordic1.png" /></div>
          <div class="col-md-6 right">
            <div class="ImgTwo">
              <div><img src="../../static/images/productCenter/nordic2.png"></div>
              <div><img src="../../static/images/productCenter/nordic2.png"></div>
            </div>
            <div class="ImgTwo ">
               <div><img src="../../static/images/productCenter/nordic2.png"></div>
               <div><img src="../../static/images/productCenter/nordic2.png"></div>
            </div>
          </div>
        </div>
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
       ImgListData:[{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},
                {ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1}
       ],
    }
  }
}
</script>
<style scoped lang="less">
.Recommend{text-align: left;font-family:"STHeiti";padding: 10rem 0;display: flex;justify-content: space-around;width: 90%;margin: 0 auto;
  .RecommendInfo{width: 38%;}
  .RecommendList{width: 38%;}
}
.Recommend .tit{display: block;margin-bottom: 2.2rem;font-size: 1.5rem;letter-spacing:8px;}
.Recommend .tit span{border-bottom: .4rem solid #ccc;}
.Price{margin-bottom: 2rem;}
.Price p{font-size: 1.2rem;margin-bottom: 0;}
.Price span{display: block;font-size: 1.1rem;}
.Recommend ul{padding-left: 1.1rem;}
.Recommend .info strong{display: block;margin-bottom: .6rem;font-size: 1.2rem;letter-spacing:5px;}
.Recommend .info li{font-size: 1rem;}
.Recommend img{width: 100%;}
.hotProduct{margin-bottom: 6rem;}
.HotTitle span{padding: 0 3rem;letter-spacing:10px;border-bottom: 3px solid #ccc;font-size: 1.2rem;}

.Nordic{margin-bottom: 10rem;}
.Nordic img{width: 100%;}
.Nordic .HotTitle{margin-bottom: 3rem;}
.Nordic .right{display: flex;flex-direction: column;justify-content: space-between;}
.Nordic .right .ImgTwo{width: 100%;display: flex;justify-content: space-between; }
.Nordic .right .ImgTwo>div{width: 48%;}

@media (max-width: 768px) {
.Recommend{flex-wrap: wrap; 
  .RecommendInfo{width: 100%;}
  .RecommendList{width: 50%;}
} 

}
</style>
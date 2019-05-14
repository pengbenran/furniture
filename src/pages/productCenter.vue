<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark"/>
    <Banner/>
    <main>
      <div class="container Recommend">
        <div class="row">
          <div class="col-md-4 FlexWarp">
              <div class="RecommendInfo">
                  <strong class="tit"><span>特别</span>推荐</strong>
                  <div class="row">
                    <div class="col-5 col-md-12 Price">
                      <p>L O C K 铁制书桌灯</p>
                      <span>销量：18</span>
                      <span>￥ 124</span>
                    </div>
                    <div class="col-7 col-md-12  info">
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
          </div>
          <div class="col-md-4">
                <div class="RecommendList"><img src="../assets/images/productCenter/recommend1.png" /></div>
          </div>
          <div class="col-md-4">
                <div class="RecommendList"><img src="../assets/images/productCenter/recommend2.png" /></div>
          </div>          
        </div>
      </div>
      <!--特别推荐 end-->

      <div class="hotProduct">
       <div class="HotTitle"><span>热销产品</span></div>
       <div ><ImgList  :ImgListData="ImgListData"/></div> 
      </div>
      <!--热销产品 end-->

      <div class="hotProduct">
       <div class="HotTitle"><span>网红家具</span></div>
       <div><ImgList  :ImgListData="ImgListData"/></div> 
      </div>
      <!--网红家具 end-->

      <div class="Nordic">
        <div class="HotTitle"><span>北欧整装</span></div>
        <div class="row">
          <div class="col-md-6 left" @click="to"><a href="javascript:;"><img src="../assets/images/productCenter/nordic1.png" /><span class="tip">面积：123<sup>3</sup> &nbsp;&nbsp;两室一厅 &nbsp;&nbsp;首付：10万</span></a></div>
          <div class="col-md-6 right">
            <div class="ImgTwo">
              <div @click="to"><a href="javascript:;"><img src="../assets/images/productCenter/nordic2.png" /><span class="tip">面积：123<sup>3</sup> &nbsp;&nbsp;两室一厅 &nbsp;&nbsp;首付：10万</span></a></div>
              <div @click="to"><a href="javascript:;"><img src="../assets/images/productCenter/nordic2.png" /><span class="tip">面积：123<sup>3</sup> &nbsp;&nbsp;两室一厅 &nbsp;&nbsp;首付：10万</span></a></div>
            </div>
            <div class="ImgTwo ">
               <div @click="to"><a href="javascript:;"><img src="../assets/images/productCenter/nordic2.png" /><span class="tip">面积：123<sup>3</sup> &nbsp;&nbsp;两室一厅 &nbsp;&nbsp;首付：10万</span></a></div>
               <div @click="to"><a href="javascript:;"><img src="../assets/images/productCenter/nordic2.png" /><span class="tip">面积：123<sup>3</sup> &nbsp;&nbsp;两室一厅 &nbsp;&nbsp;首付：10万</span></a></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer/>   
    <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
import ImgList from "@/components/public/ImgList"
import erCode from '@/components/public/erCode'
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,ImgList,erCode},
  data () {
    return {
      index:3,
       ImgListData:[{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},
                {ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1},{ImgUrl:'../../assets/good2.png',id:1}
       ],
    }
  },
  methods:{
  to(){
            this.$router.push({
                path:`/productInfo`
            })
        },
         showMark(){
       this.$refs.erCode.openMark();
    }
},
 mounted(){
  
  }
}
</script>
<style scoped lang="less">
.Recommend{text-align: left;font-family:"SimHei";padding: 10rem 0;display: flex;align-items: center;margin: 0 auto;
}
.FlexWarp{display: flex;align-items: center;}
.Recommend .tit{display: block;margin-bottom: 2.2rem;font-size: 1.5rem;letter-spacing:8px;}
.Recommend .tit span{border-bottom: .4rem solid #ccc;}
.Price{margin-bottom: 2rem;}
.Price p{font-size: 1.2rem;margin-bottom: 0;}
.Price span{display: block;font-size: 1.1rem;}
.Recommend ul{padding-left: 1.1rem;}
.Recommend .info strong{display: block;margin-bottom: .6rem;font-size: 1.2rem;letter-spacing:5px;}
.Recommend .info li{font-size: 1rem;}
.Recommend img{width: 100%;}
.hotProduct{width: 85%;margin:200px auto;}
.HotTitle{margin-bottom: 80px;}
.HotTitle span{padding: 0 3rem;letter-spacing:10px;border-bottom: 3px solid #ccc;font-size: 1.2rem;}
.Nordic{margin-bottom: 10rem;width: 85%;margin:200px auto;}
.Nordic img{width: 100%;}
.Nordic  a{position: relative;display: inline-block;overflow: hidden;}
.Nordic  .tip{position: absolute;bottom:10%;background: rgb(191,191,191);color: #fff;padding: .5rem 1rem;left: -4rem;;opacity: 0;transition: all 0.5s;}
.Nordic  a:hover .tip{opacity: 1;left: 0;}
.Nordic .right span{font-size: .9rem; padding: .2rem .5rem;}
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
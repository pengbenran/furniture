<template>
  <div>
     <Header/>
     <Banner/>
     
     <div class="container Tab mt150">
       <div class="row">
         <div class="col-md-3"><img src="../../static/images/serviceCenter/tab1.png" /><span>售后服务</span></div>
         <div class="col-md-3"><img src="../../static/images/serviceCenter/tab2.png" /><span>售后服务</span></div>
         <div class="col-md-3"><img src="../../static/images/serviceCenter/tab3.png" /><span>售后服务</span></div>
         <div class="col-md-3"><img src="../../static/images/serviceCenter/tab4.png" /><span>售后服务</span></div>
       </div>
     </div>
     <!--Tab end-->
    
     <div class="TabWarp mt150">
        <span class="TabTitle">国家标准</span>
        <div class="TabList">
          <div class="row">
            <div class="col-md-6">
               <div class="tit">
                 <strong>国家木地板环保等级标准</strong><p>2019年4月26日</p>
               </div>
               <div class="info">
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准,
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
               </div>
               <div class="tit">
                 <strong>国家木地板环保等级标准</strong><p>2019年4月26日</p>
               </div>
               <div class="info">
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准,
                 国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
               </div>
            </div>
            <div class="col-md-6 TabImg">
                <img src="../../static/images/serviceCenter/bz.png" />
            </div>
          </div>
        </div>
     </div>

     <Footer/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
export default {
  name: 'serviceCenter',
  components:{Header,Banner,Footer},
  data () {
    return {
     
    }
  }
}
</script>
<style scoped>
.Tab{width: 60%;}
.Tab img{width: 46px;height: 46px;}
.Tab span{display: block;margin-top: 15px;}
.mt150{margin-top: 120px;}

.TabWarp{text-align: center;}
.TabTitle{display: inline-block;padding: 0 40px;background: #f8f8f8;font-size: 18px;}
.TabList{padding: 80px 10%;text-align: left;background: #f8f8f8;}
.TabList>div>div{padding: 0 45px;}
.TabList .tit{margin-bottom: 25px;}
.TabList .info{font-size: 14px;font-weight: 100;text-indent:2em;justify-content: content;}
.TabList .tit p{font-weight: 100;font-size: 14px;}
.TabImg img{width: 100%;}
</style>
<template>
  <div class="containt">
    <Header :curretIndex="index" @openMark="showMark" ref='navHeader'/>
    <!--header end-->

    <div class="main">
      <div class="mainWarp scroll" data-animation="fadeInLeft">
        <strong>{{selectCorporate.enTitile}}</strong>
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
   <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import erCode from '@/components/public/erCode'
export default {
  name: 'corporateCulture',
  components:{Header,Footer,erCode},
  data () {
    return {
     index:1,
     selectIndex:0,
     corporate:[
     {
      titile:'企业简介',
      enTitile:'OUR COMPANY',
      content:'我公司是一家具有着十多年地板生产历史的出口企业。企业实力雄厚，拥有众多高素质人才，集研发、制造、海外营销于一体，产品主要销往日本及欧美等国家。工厂技术力量精良，拥有多套国内外先进的生产设备和无尘油漆喷涂流水线，在整个生产过程中产品严格按照国际质量标准检测，并已通过ISO9001：2000质量管理体系认证以及ISO14001：2004环境管理体系认证。产品涵盖了实木地板，三层实木复合地板，多层实木复合地板以及强化复合地板四大系列。我们将为广大客户提供从售前到铺装以及售后保修的全过程、全方位一站式服务。'
     },
       {
      titile:'产品理念',
      enTitile:'PRODUCT CONCEPT',
      content:`以促进人们的居家愉悦和生活品质为愿景，我们公司运用地板与家居产品制
      造领域的专业经验，旨在让消费者享有高品质绿色家居生活。
      为树立健全的绿化、环保意识，公司在生活公益方面身体力行，
      为了向全社会普及绿色、健康的生活方式。

      未来，公司正在构建从硬装到软装的完整大家居全产业链条，
      致力于将自身打造成一站式整体家居解决方案供应商。
      公司的企业愿景和使命是
      成为全球地板领军企业以及家居行业领军企业。`
     },  {
      titile:'企业实力',
      enTitile:'ENTERPRISE STRENGTH',
      content:`我公司生产的三层实木复合地板是出口欧美的主流产品。顺利通过DIN280和E1国际环保标准认证及欧洲CE等体系认证。我公司的地板安装工人，全部是有着多年丰富经验的安装技工。本着为客户着想，客户第一的理念，凭借精湛的技术精益求精的为客户铺装地板。我公司并定期对工人进行铺装技术培训及评比考试。
为了不断提高我公司的服务水平，在铺装结束后，我公司的客服人员会定期回访客户，对地板的使用情况以及我公司的服务质量情况进行跟踪了解。我公司向客户调查满意率、建立客户满意率调查表，倾听客户的意见建议，使我们的工不断完善。`
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
      var aniName=null;
      var $scroll=$(".scroll");
      aniName=$scroll.eq(0).data("animation");
      $scroll.eq(0).addClass("animate").addClass(aniName);
    },
     showMark(){
       this.$refs.erCode.openMark();
    }
  },
  mounted(){
    this.$refs.navHeader.getRootList()
  }
}
</script>
<style scoped>
.main{background-image: url('../assets/images/corporateCulture/bg.png');background-size: cover;width:100%;}
.mainWarp{width:42%;background: rgba(255, 255, 255, 0.45);margin-top: 200px;margin-bottom: 150px;padding-bottom: 50px;box-sizing: border-box;font-family:'STFangsong';}
.main{position: relative;display: flex;align-items: center;justify-content: center;}
.main strong{display: block;font-size: 48px;padding:30px 0 50px 0;text-align: center;font-family: SimHei;}
.main .info{padding: 0 50px; text-indent: 25px;font-size: 20px;}
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

<template>
  <div class="mobileServer">
     <Header :curretIndex="index" @openMark="showMark"/>
     <Banner/>
     <div class="container Tab mt150">
       <div class="row">
         <div class="col-3" v-for="(item,index) in serviceData" :class="serviveIndex==index?'list-on':''" @click="changTab(index)">
          <img :src="serviveIndex==index?item.selectIcon:item.icon" v-if=""/>
          <span>{{item.serviceKind}}</span></div>
       </div>
     </div>
     <!--Tab end-->
    
    <div class="container Process" :class="`ChangTab${serviveIndex}`">
      <div class="LineWarp" v-for="(item,index) in serviceObj.imgList">
        <div class="Line">
          <span></span>
          <label>{{item.name}}</label>
        </div>
        <div class="LineCase"><img :src="item.img" class="d-block w-100" /></div>
      </div> 
      <!-- <div class="LineWarpImg">
        <div class="LineCase" v-for="(item,index) in serviceObj.imgList"><img :src="item.img"/></div>
      </div> -->
    </div>
     <div class="TabWarp mt150">
        <span class="TabTitle">国&nbsp;家&nbsp;标&nbsp;准</span>
        <div class="TabList">
          <div class="row">
            <div class="col-md-6 newList">
              <div class="Case">
                <div class="tit">
                  <strong>国家木地板环保等级标准</strong><p>2019年4月26日</p>
                </div>
                  <div class="info">
                    我国的人造板及其制品的标准体系是参照欧洲和日本的。国家质量监督检验检
                    疫总局发布了《室内装饰装修材料人造板及其制品中甲醛释放限量》(GB18580--20
                    17)，标示了国标E1≤0.124mg/L，这是该标准对甲醛释限量的唯一等级，目前行业
                    内有《无醛人造板及其制品》的团体标准，这是目前我国人造板及其制品中甲醛释
                    放限量的最高标准
                </div>
              </div>
              <div class="Case">
                <div class="tit">
                  <strong>国家安装验收标准</strong><p>2019年4月26日</p>
                </div>
                <div class="info">
                  <p>1、面层材料和辅助材料的品种、级别、性能、规格、花色必须符合设计、产品技术标准与现行施工验收规范的要求，并符合建筑内装修设计防火有关规定。</p>
                  <p>2、壁纸墙布必须粘结牢固，无空鼓、翘边、皱折等缺陷。</p>
                  <p>3、表面平整，无波纹起伏。壁纸、墙布与挂镜线、贴脸板紧接，无缝隙；色泽一致，无斑污，正视无胶痕，无明显压痕。</p>
                  <p>4、各幅拼接应横平竖直，图案端正，拼缝处图案花纹吻合，距墙1m处正视无明显接缝，阴角处搭接顺光，阳角无接缝，角度方正，边缘整齐无毛边。</p>
                  <p>5、裱糊与挂镜线、贴脸板、踢脚板、电气槽盒等交接处应交接严密，无缝隙，无漏贴和补贴，不糊盖需拆卸的活动件，活动件四周及挂镜线、贴脸板、踢脚板等处边缘切割整齐、顺直，无毛边。</p>
                  <p>6、裱糊好的墙纸应表面平整挺秀，拼花正确，图案完整，连续对称，无色差、无胶痕，面层无飘浮，经纬线顺直。。</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 TabImg">
                <img src="../assets/images/serviceCenter/bz.png" />
            </div>
          </div>
        </div>
     </div>    
     <div class="product">
       <div class="title"><span><img src="../assets/images/serviceCenter/productTit.png" /></span></div>
       <div class="productInfo">
         <div class="row">
          <div class="col-md-6 maintenance">
            <label>使用</label>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装完毕后，24小时内尽量减少走动，至少48小时后方可搬入重物；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 在铺设地板的区域内，体积重量较大家具不要对称摆放，以免影响地板自由伸缩；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 搬运家具时不宜托挪，不宜用铁质家具腿直接接触木地板表面；可在桌椅凳等与地板接触的地方加上缓冲垫，以减少摩擦地板的程度；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 外出时请关好门窗，以防止雨水浸入和阳光直射，如不慎将水倒在地板上，应及时擦拭干净；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 室内空气湿度应保持在40%-70%之间。当室内空气湿度≤40%时，应使用加湿器来调节室内湿度；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 当室内空气湿度≥70%时，应采取排湿措施，或使用空调的除湿功能来平衡湿度；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 严禁地板接触明火或直接在地板上放置大功率电热器；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地采暖环境使用，升降温应平缓，切不可骤冷或骤热。地热地板到达地板表面上的温度不可超过27℃,每年首次使用地热以每天调高温度3℃-5℃为宜。</p>
          </div>

          <div class="col-md-6 TabImg">
            <img src="../assets/images/serviceCenter/bz.png"/>

          </div>
         </div>
       </div>
     </div>
     <div class="product Clean">
       <div class="productInfo">
         <div class="row">
          <div class="col-md-6 maintenance">
            <label>清洁</label>
            <div class="tit">日常用吸尘器或不滴水的拖布顺地板走向拖擦，保持地板表面干燥清洁， 局部污渍可用地板专用清洁剂清除；严禁使用酸、碱性溶剂或汽油等有机溶剂擦洗；</div>
            <label>特殊污渍处理方法</label>
            <p><img src="../assets/images/serviceCenter/sj.png"/>油渍、油漆、油墨可使用专用去渍油擦拭； </p>
            <p><img src="../assets/images/serviceCenter/sj.png"/>血迹、果汁、红酒、啤酒等残渍可以用湿抹布或用抹布蘸上适量的地板清洁剂擦拭；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/>药物或颜料，必须在污迹未溶入木质表层以前加以清除；</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/>蜡和口香糖，用塑料膜包一块冰块放在污渍上，然后小心刮掉。</p>
          </div>
          <div class="col-md-6">
            <div class="ImgList">
              <div><img src="../assets/images/serviceCenter/Clean.png" /></div>
            </div>
          </div>
         </div>
       </div>
     </div>
      <div class="product Maintenance">
       <div class="productInfo">
         <div class="row">
          <div class="col-md-6 maintenance">
            <div>
              <label>保养</label>
              <div class="tit">强化复合地板无需使用油精或打蜡保养；</div>
              <div>实木、实木复合地板定期打蜡，或使用大自然地板木质专用油精护理保养， 保养周期为每季度一次或根据日常使用频率保养。</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="ImgList">
              <div><img src="../assets/images/serviceCenter/Clean.png" /></div>
            </div>
          </div>
         </div>
       </div>
     </div>

     <div class="container Map">
       <img src="../assets/images/serviceCenter/map.png" />
       <div class="MapF">
        <div class="icon" @mouseenter.self="mouseEnter()" @mouseleave.self="mouseLeave()"><img src="../assets/images/serviceCenter/mapf.png" class="w-100 d-block" /></div>
        <div class="sj" v-show="isShow"></div>
        <div class="addressInfo" v-show="isShow">
           地址:四川省成都市金牛区天力商务楼501
         </div>
       </div>
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
export default {
  name: 'serviceCenter',
  components:{Header,Banner,Footer,erCode},
  data () {
    return {
     index:5,
     serviveIndex:0,
     isShow:false,
     serviceData:[
     {serviceKind:'售前服务',
     icon:require('../assets/images/serviceCenter/tab1.png'),
     selectIcon:require('../assets/images/serviceCenter/tabselect1.png'),
     imgList:[{img:require('../assets/images/serviceCenter/1366088.png'),name:'1、测量'},{img:require('../assets/images/serviceCenter/t013f60b20a2a8daa17.png'),name:'2、设计方案'}]
      },
      {serviceKind:'售中服务',
     icon:require('../assets/images/serviceCenter/tab2.png'),
     selectIcon:require('../assets/images/serviceCenter/tabselect2.png'),
      imgList:[{img:require('../assets/images/serviceCenter/t1.png'),name:'1、图纸确定'},{img:require('../assets/images/serviceCenter/t2.png'),name:'2、施工'},{img:require('../assets/images/serviceCenter/t3.png'),name:'3、验收'}]
      },
      {serviceKind:'售后服务',
      selectIcon:require('../assets/images/serviceCenter/tabselect3.png'),
     icon:require('../assets/images/serviceCenter/tab3.png'),
     imgList:[{img:require('../assets/images/serviceCenter/pople2.png'),name:'1、保质期内维护'},{img:require('../assets/images/serviceCenter/pople.png'),name:'2、保质期内保养'}]
      },
      {serviceKind:'投诉服务',
     icon:require('../assets/images/serviceCenter/tab4.png'),
     selectIcon:require('../assets/images/serviceCenter/tabselect4.png'),
     imgList:[{img:require('../assets/images/serviceCenter/email.png'),name:'邮箱投诉'},{img:require('../assets/images/serviceCenter/phone.png'),name:'电话投诉'}]
      }
     ]
    }
  },
  methods:{
  mouseEnter(){
    this.isShow=true
  },
  mouseLeave(){
    this.isShow=false
  },
  changTab(index){
    let that=this
    that.serviveIndex=index
  },
   showMark(){
       this.$refs.erCode.openMark();
    }
},
computed:{
    serviceObj(){
      let that=this
      return that.serviceData[that.serviveIndex]
    }
  },
 mounted(){
   
  }
}
</script>
<style scoped lang="less">
.Tab{width: 60%;}
.Tab .list-on{color: #379589;}
.Tab img{width: 2.8rem;height: 2.8rem;}
.Tab span{display: block;margin-top: 1rem; font-weight: bold;}
.mt150{margin-top: 8rem;}

.TabWarp{text-align: center;}
.TabTitle{display: inline-block;height: 40px;line-height: 40px;width: 200px; text-align: center;background: #f8f8f8;font-size: 1.2rem;}
.TabList{padding: 6rem 10%;text-align: left;background: #f8f8f8;}
.TabList .newList{display: flex; justify-content: space-between;flex-direction: column;}
.TabList>div>div{padding: 0 3rem;}
.TabList .tit{margin-bottom: 24px;}
.TabList .info{font-size:20px;font-weight: 100;text-indent:2rem;justify-content: content;}
.TabList .tit p{font-weight: 100;font-size: 1rem;}
.TabImg{display: flex;align-items: center;}
.TabImg img{width: 100%;}
.TabList .Case{padding-bottom:20px;}

.productInfo{padding: 6rem 10%;text-align: left;}
.productInfo>div>div{padding: 0 3rem;}
.productInfo label{font-size: 1.5rem;}
.product .title{text-align: left;margin-left: 1rem;margin-top: 5rem;}
.productInfo .tit{margin: 1.5rem 0 2rem;}
.productInfo .maintenance{display: flex;flex-direction: column;justify-content: space-around;font-size: 18px;}
.productInfo .maintenance p{padding: 0;margin:0;}

.ImgList{display: flex;}
.ImgList>div{margin: 0 0.5rem;}
.ImgList>div:nth-child(2){margin-top: 10rem;}
.ImgList img{width: 100%;}

.Clean{background: #f8f8f8;}
.Clean p{margin-bottom: .6rem;}

.Maintenance .Info{display: flex;align-items: center;}

.Process{text-align: center;margin-top: 50px;width: 50%;margin: auto;display: flex; justify-content: space-around;}
.LineWarp{align-items: center;margin-top:50px;flex-grow: 1;}
.LineWarp .Line{position: relative;width: 100%;background: #000;height: 4px;margin-bottom: 50px;}
.LineWarp .Line span{ position: absolute;bottom: -.8rem;width: 0;height: 0;border: .8rem solid red;border-top-color: black;border-bottom: none;border-left-color: transparent;border-right-color: transparent;}
.LineWarp .Line:first-child span{left: 50%;}
.LineWarp .Line:last-child span{right: 50%;}
.LineWarp .Line label{position: absolute;top: 1rem}
.LineWarp .Line:first-child label{left: 38%;}
.LineWarp .Line:last-child label{right: 38%;}
.LineWarpImg{width: 70%;margin: auto;display: flex;align-items: center;margin-top: 2rem; justify-content: space-around;}
.LineWarpImg .LineCase{}
.LineWarpImg .LineCase img{width: 100%;height: 100%;display: block;}
.LineWarp .tit{width: 50%;text-align: center;}


.maintain{
position: relative;
margin: 0 auto;
width: 100%;
}
.maintain>div{
  padding-left: 10px;
box-sizing: border-box;
position: absolute;
top: 50%;
/* 这里有兼容性问题 */
-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
-o-transform: translateY(-50%);
transform: translateY(-50%);
}
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
.ChangTab0{
    .LineWarp{width: 50%;}
  .LineWarp:nth-child(1) label{left: 44%;}
}
.ChangTab1 {
 
   .LineWarp img{padding: 0 .5rem;}
} 

.ChangTab3 {
    .LineWarp:nth-child(1) label{left: 44%;}
    .LineWarp:nth-child(2) label{left: 44%;}
    .LineWarp img{width: 50%!important;margin-left: 30%;}
}

</style>
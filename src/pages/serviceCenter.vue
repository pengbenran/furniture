<template>
  <div class="mobileServer">
     <Header :curretIndex="index" />
     <Banner/>
     <div class="container Tab mt150">
       <div class="row">
         <div class="col-3" v-for="(item,index) in serviceData" :class="serviveIndex==index?'list-on':''" @click="changTab(index)"><img :src="item.icon" /><span>{{item.serviceKind}}</span></div>
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
        <span class="TabTitle">国家标准</span>
        <div class="TabList">
          <div class="row">
            <div class="col-md-6">
              <div class="Case">
                <div class="tit">
                  <strong>国家木地板环保等级标准</strong><p>2019年4月26日</p>
                </div>
                <div class="info">
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准,
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准等级标准国家木地板环保等级标准等级标准国家木地板环保等级标准等级标准国家木地板环保等级标准
                </div>
              </div>
              <div class="Case">
                <div class="tit">
                  <strong>国家木地板环保等级标准</strong><p>2019年4月26日</p>
                </div>
                <div class="info">
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准国家木地板环保等级标准,国家木地板环保等级标准,
                  国家木地板环保等级标准国家木地板环保等级标准国家木地板环保等级标准等级标准国家木地板环保等级标准等级标准国家木地板环保等级标准
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
          <div class="col-md-6">
            <label>使用</label>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。地板安装后，</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。4小时内尽量减少走动，至少48小时后可搬入重物存放</p>
          </div>
          <div class="col-md-6">
            <div class="row ImgList">
              <div class=""><img src="../assets/images/serviceCenter/product1.jpg" /></div>
              <div><img src="../assets/images/serviceCenter/product1.jpg" /></div>
            </div>
          </div>
         </div>
       </div>
     </div>
     <div class="product Clean">
       <div class="productInfo">
         <div class="row">
          <div class="col-md-6">
            <label>清洁</label>
            <div class="tit">日常用吸尘器或用不滴水的拖布顺地板的走向摩擦，保持地板的干燥清洁，局部有污渍，局部有污渍可用清洁剂清除；禁止使用酸、碱有机性汽油等物品。</div>
            <label>特殊污渍处理方法</label>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，入重物存放。</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小时后可搬入重物存放。地板安装后，</p>
            <p><img src="../assets/images/serviceCenter/sj.png"/> 地板安装后，24小时内尽量减少走动，至少48小重物存放。</p>
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
          <div class="col-md-6 Info">
            <div>
              <label>保养</label>
              <div class="tit">日常用吸尘器或用不滴水的拖布顺地板的走向摩擦，保持地板的干燥清洁，局部有污渍，局部有污渍可用清洁剂清除；禁止使用酸、碱有机性汽油等物品。</div>
              <div>日常用吸尘器或用不滴水的拖布顺地板的走向摩擦，保持地板的干燥清洁，局部有污渍，局部有</div>
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
     index:5,
     serviveIndex:0,
     isShow:false,
     serviceData:[
     {serviceKind:'售前服务',
     icon:require('../assets/images/serviceCenter/tab1.png'),
     imgList:[{img:require('../assets/images/serviceCenter/1366088.png'),name:'1、测量'},{img:require('../assets/images/serviceCenter/t013f60b20a2a8daa17.png'),name:'2、设计方案'}]
      },
      {serviceKind:'售中服务',
     icon:require('../assets/images/serviceCenter/tab2.png'),
      imgList:[{img:require('../assets/images/serviceCenter/t1.png'),name:'1、图纸确定'},{img:require('../assets/images/serviceCenter/t2.png'),name:'2、施工'},{img:require('../assets/images/serviceCenter/t3.png'),name:'3、验收'}]
      },
      {serviceKind:'售后服务',
     icon:require('../assets/images/serviceCenter/tab3.png'),
     imgList:[{img:require('../assets/images/serviceCenter/pople2.png'),name:'1、保质期内维护'},{img:require('../assets/images/serviceCenter/pople.png'),name:'2、保质期内保养'}]
      },
      {serviceKind:'投诉服务',
     icon:require('../assets/images/serviceCenter/tab4.png'),
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
.TabTitle{display: inline-block;padding: 0 2.5rem;background: #f8f8f8;font-size: 1.2rem;}
.TabList{padding: 6rem 10%;text-align: left;background: #f8f8f8;}
.TabList>div>div{padding: 0 3rem;}
.TabList .tit{margin-bottom: 1.8rem;}
.TabList .info{font-size: 1rem;font-weight: 100;text-indent:2rem;justify-content: content;}
.TabList .tit p{font-weight: 100;font-size: 1rem;}
.TabImg img{width: 100%;}
.TabList .Case{padding: 3rem 0;}

.productInfo{padding: 6rem 10%;text-align: left;}
.productInfo label{font-size: 2rem;}
.product .title{text-align: left;margin-left: 1rem;margin-top: 5rem;}
.productInfo .tit{margin: 1.5rem 0 2rem;}

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
.LineWarp .Line:first-child span{left: 30%;}
.LineWarp .Line:last-child span{right: 30%;}
.LineWarp .Line label{position: absolute;top: 1rem}
.LineWarp .Line:first-child label{left: 18%;}
.LineWarp .Line:last-child label{right: 18%;}
.LineWarpImg{width: 70%;margin: auto;display: flex;align-items: center;margin-top: 2rem; justify-content: space-around;}
.LineWarpImg .LineCase{}
.LineWarpImg .LineCase img{width: 100%;height: 100%;display: block;}
.LineWarp .tit{width: 50%;text-align: center;}

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
  .LineWarp:nth-child(1) label{left: 26%;}
}
.ChangTab1 {
 
   .LineWarp img{padding: 0 .5rem;}
} 

.ChangTab3 {
    .LineWarp:nth-child(1) label{left: 26%;}
    .LineWarp:nth-child(2) label{left: 25%;}
    .LineWarp img{width: 50%!important;margin-left: 12%;}
}

</style>
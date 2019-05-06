<template>
  <div class="containt mobile">
    <Header/>
    <!-- banner图 -->
    <Banner/>
    <!-- 关于我们 -->
    <OurCase/>
    <!-- 产品分类 -->
      <div class="Case_List">
        <div class="Lits" v-for='(item,index) in kindData' ><a href="javascript:;" @click='changTab(index)'><img :src="item.kindImg" alt="..."></a> </div>
      </div>
    <div class="hotCase">
     <div class="hotTitle">
       <label>热销产品</label>
       <div class="hotline"></div>
       <span>前往查看更多》</span>
     </div>
     <div class="hotConent">
       <div class="Lits" v-for="(item,index) in kindObj"><a href="javascript:;"><img :src="item.goodImg" alt="..."><div class="hotMask"><span><img src="../assets/cat.png" />{{item.name}}</span></div></a></div>
     </div>
    </div>
  <!-- 热销产品 -->


<div class="row magTop ">
  <div class="col-xs-12 responsive">
    <img src="static/images/home/desigen.png" class="img-responsive">
  </div>
</div>
 <div class="row mag100 homeDesign">
      <div class="col-xs-12 col-lg-7">
        <img src="static/images/home/desigen1.png" class="img-responsive">
      </div>
      <div class="col-xs-12 col-lg-5 DesignCase">
       <div class="homeDesignInfo">
         <p class="title">清新北欧风设计 -- 李强</p>
         <p>李强毕业于哈是李强毕业于哈是李强毕业于哈是李强毕业于哈是李强毕业于哈是李强毕业于哈是</p>
         <p>大小：128m<sup>3</sup>   结构：三室一厅一卫    预算：15万    耗时：三个月</p>
         <p>设计理念：航空公司航空公司航空公司航空公司航空公司航空公司航空公司航空公司公司航空公司航空公司航空公公司航空公司航空公司航空公</p>
         <div class="DesignBtn">
          <span>M O R E 》</span>
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
import OurCase from "@/components/public/caseOur"

export default {
  components:{Header,Banner,OurCase,Footer},
  name: 'Home',
  data () {
    return {
      kindIndex:0,
      kindData:[
      {
        kindName:'橱柜',
        kindImg:'static/images/home/kind1.png',
        goodList:[{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good2.png'}]
      }, {
        kindName:'地板',
        kindImg:'static/images/home/kind2.png',
        goodList:[{name:'北欧风地板',goodImg:'static/images/home/good3.png'},{name:'北欧风地板',goodImg:'static/images/home/good3.png'},{name:'北欧风地板',goodImg:'static/images/home/good3.png'},{name:'北欧风地板',goodImg:'static/images/home/good3.png'},{name:'北欧风地板',goodImg:'static/images/home/good3.png'},{name:'北欧风地板',goodImg:'static/images/home/good3.png'}]
      }, {
        kindName:'实木家具',
        kindImg:'static/images/home/kind3.png',
        goodList:[{name:'北欧风实木家具',goodImg:'static/images/home/good4.png'},{name:'北欧风实木家具',goodImg:'static/images/home/good4.png'},{name:'北欧风橱柜',goodImg:'static/images/home/good4.png'},{name:'北欧风实木家具',goodImg:'static/images/home/good4.png'},{name:'北欧风实木家具',goodImg:'static/images/home/good4.png'},{name:'北欧风实木家具',goodImg:'static/images/home/good2.png'}]
      }, {
        kindName:'正装订制',
        kindImg:'static/images/home/kind4.png',
        goodList:[{name:'北欧风正装订制',goodImg:'static/images/home/good5.png'},{name:'北欧风正装订制',goodImg:'static/images/home/good5.png'},{name:'北欧风正装订制',goodImg:'static/images/home/good5.png'},{name:'北欧风正装订制',goodImg:'static/images/home/good5.png'},{name:'北欧风正装订制',goodImg:'static/images/home/good5.png'},{name:'北欧风正装订制',goodImg:'static/images/home/good2.png'}]
      }
      ]
    }
  },
  computed:{
    kindObj(){
      let that=this
      return that.kindData[that.kindIndex].goodList
    }
  },
  methods:{
    changTab(index){
      let that=this
      that.kindIndex=index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.containt{
  position: relative;
}
.navbar{
position: absolute;
top:0;
z-index: 10;
width: 100%;
}
.navbar-header{
 padding-left: 100px;
 padding-right: 123px;
 box-sizing: border-box;
}
.row{
  margin: 0;
}
.magTop{
  margin-top:180px; 
}
.positionRelative{
  position: relative;
  padding-top: 5%;
  box-sizing: border-box;
}
.positionAbsolute{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.icon{
  height: 70px;
  width: 70px;
  padding: 10px;
  box-sizing: border-box;
}
.displayFlex{
  display: flex;
}
.intro{
  flex-grow: 0.8;
  text-align: left;
  padding: 10px;
  border-left: 1px solid #A5A5A5;
  box-sizing: border-box;
}
.title{
  /*font-size: 18px;*/
  font-weight: bold;
}
.Case_List{width: 70%;margin:50px auto;display: flex;justify-content: space-around;
 .Lits{
    width: 22%;
  }
}
.Case_List a{display: inline-block;}
.Case_List a img{transition: all 0.3s;border-radius: 2px;}
.Case_List a:hover{box-shadow: 0 0 10px rgba(0, 0, 0, 0.46);}
.Case_List a:hover img{transform: scale(1.1);}
.Case_List a img{width: 100%;}

.hotCase{text-align: center;margin: 50px auto;width: 90%;
  .hotConent{display: flex;justify-content: space-around;flex-wrap:wrap;}
}
.hotTitle{font-weight: 100;width: 255px;margin: auto;}
.hotTitle label{font-size: 17px;margin-bottom: 0px;letter-spacing:8px;}
.hotTitle .hotline{height: 4px;width: 100%;background: #ccc;}
.hotTitle span{font-size: 14px;letter-spacing:12px;color: #666;}
.hotCase .Lits img{width: 100%;}
.hotCase .Lits{margin-top: 30px;width: 32%;}
.hotCase a{display: inline-block;position: relative;}
.hotMask{z-index: 2;position: absolute;left: 0;top: 0;height: 100%;width: 100%;background: rgba(204, 204, 204, 0.45);opacity: 0;transition: all 0.3s;}
.hotCase a:hover .hotMask{opacity: 1;}
.hotCase .hotMask span{position: absolute;top: 48%;width: 100%;display: block;left: 0;color: #0d7569;}
.hotCase .hotMask img{width: 25px;height: 25px;margin-right: 4px;}
.mag100{margin-top: 100px;}

.homeDesign .DesignCase{position: relative;padding: 0;font-family: "Microsoft YaHei";}
.DesignCase{display: flex;align-items: center;}
.homeDesignInfo{text-align: left;padding: 65px; box-sizing: border-box;}
.homeDesignInfo .title{font-weight: bold;}
.DesignBtn{text-align: right;margin-right: 30px;}
.DesignBtn a{color: #000;font-size: 15px;text-decoration:none;}
.homeDesign img{width: 100%;}
/* .homeDesignInfo{position: absolute;top: 44%;margin-top: -120px;} */
</style>

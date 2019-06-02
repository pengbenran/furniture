<template>
  <div class="containt mobile">
    <Header :curretIndex="index" @openMark="showMark" ref='navHeader'/>
    <!-- banner图 -->
    <Banner ref='banner'/>
    <!-- 关于我们 -->
    <OurCase/>
    <!-- 产品分类 -->
    <div class="Case_List magTop scroll opacity" data-animation="zoomInUp">
        <div class="Lits" v-for='(item,index) in kindRootData' ><a href="javascript:;" @click='changTab(index,item.id)'><img :src="item.itemImg" alt=".."><div class="mask"><span>{{item.itemName}}</span></div></a></div>
      </div>
    <div class="hotCase">
     <div class="hotTitle scroll opacity" data-animation="fadeInRight">
       <label>热销产品</label>
       <div class="hotline"></div>
       <span @click="loadMore">前往查看更多》</span>
     </div>
     <div class="hotConent scroll opacity"  data-animation="fadeInLeft">
       <div class="Lits" v-for="(item,index) in goodList" @click="toInfo(item.id,item.type)"><a href="javascript:;"><img :src="item.img" alt=".."><div class="hotMask"><span><img v-if="item.type==1" src="../assets/cat.png" />{{item.name}}</span></div></a></div>
     </div>
    </div>
  <!-- 热销产品 -->


<div class="row magTop ">
  <div class="col-xs-12 responsive">
    <img src="../assets/images/home/desigen.png" class="img-responsive">
  </div>
</div>
 <div class="row mag100 homeDesign">
      <div class="col-xs-12 col-lg-7 DesignCase">
        <img src="../assets/images/home/desigen1.png" class="img-responsive">
      </div>
      <div class="col-xs-12 col-lg-5 DesignCase">
       <div class="homeDesignInfo" >
         <router-link to='/Designer' >
            <img src="../assets/images/home/sheji.png" alt="..." />
         </router-link>
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
import OurCase from "@/components/public/caseOur"
import scroll from '../assets/js/scroll.js'
import erCode from '@/components/public/erCode'
import Api from '@/Api/kind.js'
import Api_good from '@/Api/goods.js'
export default {
  components:{Header,Banner,OurCase,Footer,erCode},
  name: 'Home',
  data () {
    return {
      kindIndex:0,
      index:0,
      kindRootData:[],
      LabelList:[],
      goodList:[]
    }
  },
  computed:{
    kindObj(){
      let that=this
      return that.kindData[that.kindIndex].goodList
    }
  },
  methods:{
    changTab(index,id){
      let that=this
      that.kindIndex=index
      that.GetCatLab(id)
    },
    // 获取根分类
    getRootList(){
      let params={}
      let that=this
      params.pageIndex=1
      params.pageSize=4
      Api.getRootList(params).then(function(res){
        that.kindRootData=res
        that.GetCatLab(that.kindRootData[0].id);
      })
    },
    loadMore(){
      this.$router.push({
        path:`/productCenter`
      })
    },
    showMark(){
       this.$refs.erCode.openMark();
    },

    //获取指定分类标签商品
    GetCatLab(id){
      let that = this;
      let params = {};
      params.itemId=id;
      params.labelId = that.LabelList.id;
      params.pageIndex = 0;
      params.pageSize = 6;
      Api_good.GetCatLab(params).then(res => { 
        that.goodList = res.productList.map(Res => {
          Res.img = Res.imgUrls[0];
          return Res;
        });
      })
    },

    //获取所有的标签getLabelList
    async LabelListData(){
      let that=this
      let res = await Api.getLabelList().catch(err => {
        console.log("报错")
      })
      if(res != ''){
        that.LabelList = res.find(item=>{
          if(item.name=='热销产品'){
            return item
          }
        });
      }
    },

    toInfo(id,type){
      let that=this
      if(type==2){
        that.$router.push({
          path:`/productwarp?id=${id}`
        })
      }else{
        that.$router.push({
          path:`/productInfo?id=${id}`
        })
      }
    }
  },
  async mounted(){
     window.addEventListener('scroll', scroll.handleScroll)
     this.$refs.banner.getBannerList()
     this.$refs.navHeader.getRootList()
     await this.LabelListData();
     this.getRootList()
  },


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
  margin-top:200px; 
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
.Case_List{width: 64%;margin:200px auto 100px auto;display: flex;justify-content: space-around;
 .Lits{
    width: 22%;
  }
  
}
.Case_List a{display: inline-block;position: relative}
.Case_List .mask{position: absolute;left: 0;top: 0;height: 100%;width: 100%;background: rgba(255, 255, 255, 0.4);transition: all 0.5s;}
.Case_List .mask span{color:#000;position: absolute;bottom: 1rem;left: 0;width: 100%;text-align: center;}
.Case_List a img{transition: all 0.3s;border-radius: 2px;}
.Case_List a:hover{box-shadow: 0 0 20px rgba(0, 0, 0, 0.46);}
.Case_List a:hover img{transform: scale(1.1);}
.Case_List a:hover .mask{transform: scale(1.1);background: rgba(255, 255, 255, 0.0);}
.Case_List a:hover span{display: none;}
.Case_List a img{width: 100%;}

.hotCase{text-align: center;margin: 50px auto;width: 90%;
  .hotConent{display: flex;flex-wrap:wrap;}
}
.hotTitle{font-weight: 100;width: 255px;margin: auto;}
.hotTitle label{font-size: 17px;margin-bottom: 0px;letter-spacing:8px;}
.hotTitle .hotline{height: 4px;width: 100%;background: #ccc;}
.hotTitle span{font-size: 14px;letter-spacing:12px;color: #666;cursor :default;}
.hotCase .Lits img{width: 100%;}
.hotCase .Lits{margin-top: 30px;width: 33.3%;padding: 0 15px;}
.hotCase a{display: inline-block;position: relative;width: 100%;}
.hotMask{z-index: 2;position: absolute;left: 0;top: 0;height: 100%;width: 100%;background: rgba(204, 204, 204, 0.45);opacity: 0;transition: all 0.3s;}
.hotCase a:hover .hotMask{opacity: 1;}
.hotCase .hotMask span{position: absolute;top: 48%;width: 100%;display: block;left: 0;color: #0d7569;}
.hotCase .hotMask img{width: 25px;height: 25px;margin-right: 4px;}
.mag100{margin-top: 100px;}

.homeDesign .DesignCase{position: relative;padding: 0;}
.DesignCase{display: flex;align-items: center;}

.DesignBtn{text-align: right;margin-right: 30px;}
.DesignBtn a{color: #000;font-size: 15px;text-decoration:none;}
.homeDesign img{width: 100%;height: 100%;}
/* .homeDesignInfo{position: absolute;top: 44%;margin-top: -120px;} */
</style>

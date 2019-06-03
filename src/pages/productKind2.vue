<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark" ref='navHeader' @getItemsByParentId="getItemsByParentId"/>
    <Banner ref='banner'/>
    <main> 
      <div class="productKind">
        <div class="KindList" v-for="(item,index) in KindData" @click="changeTab(index)"><a :class="curretIndex==index?'selectOn':''">{{item.itemName}}</a></div>
      </div>  
      <div class="hotProduct" v-for="(item,index) in childKindData">
       <div class="HotTitle"><img src="../assets/images/productCenter/icon.png"><span>{{item.itemName}}</span></div>
       <div ><ImgList :goodArry="item.goodList"/></div> 
       <div class="btn" @click="jump(item.id)"><img src="../assets/images/productCenter/more.png"></div>
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
import ImgList from "@/components/public/ImgList2"
import erCode from '@/components/public/erCode'
import Api from '@/Api/kind'
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,ImgList,erCode},
  data () {
    return {
      index:3,
      curretIndex:0,
      KindData:[],
      kindId:'',
      childKindData:[]
    }
  },
  methods:{
   menu() {
    this.isScroll = window.scrollY>0;
  },
  // 根据父id获取子分类
  getItemsByParentId(parentId){
    let params={}
    let that=this
    params.parentId =parentId 
    that.KindData=[]
    Api.getItemsByParentId(params).then(function(res){
      that.KindData=res
      that.getChildItem(that.KindData[0].id)
    })
  },
  // 获取二级分类分类
  getChildItem(parentId){
    let params={}
    let that=this
    params.parentId =parentId 
    Api.getItemsByParentId(params).then(function(res){
      for(var i in res){
        that.listbyItem(res[i],i)
      }
    })
  },
  // 获取改分类下的商品
  listbyItem(row,index){
    let params={}
    let that=this
    params.pageIndex=0
    params.pageSize=6
    params.itemId=row.id
    Api.listbyItem(params).then(function(res){
      row.goodList=res.productList
      that.$set(that.childKindData,index,row)
    })
  },
   showMark(){
       this.$refs.erCode.openMark();
    },
  to(){
    this.$router.push({
      path:`/productInfo`
    })
  },
  changeTab(index){
    let that=this
    that.curretIndex=index
    that.getChildItem(that.KindData[that.curretIndex].id)
  },
  jump(cid){
    let that=this
    // console.log("爱撒娇的喀什角动量卡",item)
    that.$router.push({
      path:`/productlist?id=${that.kindId}&cid=${cid}`
    })
  }
},
 mounted(){
    let that=this
    window.addEventListener('scroll', this.menu)
    that.$refs.navHeader.getRootList()
    that.$refs.banner.getBannerList()
    that.kindId=that.$route.query.id
    that.getItemsByParentId(that.kindId)
  }
}
</script>
<style scoped lang="less">
.productKind{display: flex;width: 85%;margin: 172px auto 60px auto;
  .KindList {flex-grow: 1;text-align: center;font-weight: bold;font-size: 24px;font-family: STFangsong;}
 }
 .KindList a{color:#000;text-decoration: none;}
 .KindList a:hover{color:#0e887a;}
 .KindList .selectOn{color:#0e887a;}
.hotProduct{width: 85%;margin:0 auto;margin-bottom: 200px;}
.HotTitle{margin-bottom: 80px;}
.HotTitle img{vertical-align: top;}
.HotTitle span{padding: 0 1rem;letter-spacing:10px;font-size: 1.2rem;line-height: 28px;}
.hotProduct .btn{margin-top: 30px;}
</style>
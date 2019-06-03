<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark"/>
    <Banner ref='banner'/>
    
    <div class='container Main'>
        <div class="nav">
          <span v-for="(item,index) in kindData" :key="item.id" @click="changeTab(index)">
            <a :class="curretIndex==index?'selectOn':''">{{item.itemName}}</a>
          </span>
        </div>   
    </div>

        <div class="BgInfo" >
        <div class="BgImg">
          <img src="../assets/images/home/desigen1.png"/>
        </div>
           <div class="Info">
             <div>
             <label>{{goodDetail.name}}</label>
             <div>
               {{goodDetail.productDeclare}}
             </div>
             </div>
           </div>
        </div>  

        <div class="container Case">
          <ul>
            <li v-for="(item,index) in goodDetail.imgUrls"><img :src="item"/></li>
          </ul>
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
import Api from '@/Api/kind'
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,erCode},
  data () {
    return {
      index:3,
      kindData:[],
      curretIndex:0,
      goodDetail:{}
    }
  },
  methods:{
    showMark(){
     this.$refs.erCode.openMark();
   },
  changeTab(index){
    let that=this
    that.curretIndex=index
    that.listbyItem(that.kindData[that.curretIndex].id)
  },
  // 根据父id获取子分类
  getItemsByParentId(parentId){
    let that=this
    let params={}
    params.parentId=parentId
    Api.getItemsByParentId(params).then(function(res){
      that.kindData=res
      if(that.kindData.length>0){
        that.listbyItem(that.kindData[that.curretIndex].id)
      }
    })
  },
 // 获取改分类下的商品
  listbyItem(id){
    let params={}
    let that=this
    params.pageIndex=0
    params.pageSize=6
    params.itemId=id
    Api.listbyItem(params).then(function(res){
      // row.goodList=res.productList
      // console.log(res);
      that.goodDetail=res.productList[0]
      // console.log(that.goodDetail);
      // that.$set(that.childKindData,index,row)
      // that.childKindData.push(row)
    })
  },
},
 mounted(){
   let that=this
   that.$refs.banner.getBannerList()
   that.getItemsByParentId(that.$route.query.id)
  }
}
</script>
<style scoped lang="less">
.Main{
  margin-top: 5rem;margin-bottom: 3rem;
}
.Main .nav{
  display: flex;justify-content: center;
  span{margin: 0 2rem;}
}
.nav .selectOn{color:#0e887a;}
.BgInfo{
  position: relative; height: 35rem;margin-bottom: 5rem;
  .BgImg{height: 100%;width: 100%;}
  .BgImg img{height: 100%;width: 100%;}
  .Info{background: rgba(255, 255, 255, 0.35);width: 90%;margin-left: 5%;position: absolute;top: 30%;padding: 5rem 2rem;}
}

.Case{
  ul{display: flex;flex-wrap: wrap;list-style-type:none;}
  li{width: 33%;margin-bottom: 1rem;}
  li img{width: 100%;height: 100%;padding: 0 .5rem;}
}

</style>
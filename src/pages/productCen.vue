<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark"/>
    <Banner ref='banner'/>
    
    <div class='container Main'>
        <div class="nav">
          <span v-for="(item,index) in goodArray" :key="item.id" @click="changeTab(index)">
            <a :class="curretIndex==index?'selectOn':''">{{item.name}}</a>
          </span>
        </div>   
    </div>
        <div class="BgInfo" >
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
            <div class="carousel-inner">
              <div class="carousel-item" v-for="(item,index) in goodDetail.bannerList" :class="index==0?'active':''">
                <img class="d-block w-100" :src="item">
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block Info">
              <div>
                 <label>{{goodDetail.name}}</label>
              </div>
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
      curretIndex:0,
      goodArray:[],
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
    that.goodDetail=that.goodArray[that.curretIndex]
    // that.listbyItem(that.kindData[that.curretIndex].id)
  },
 // 获取改分类下的商品
  listbyItem(id){
    let params={}
    let that=this
    params.pageIndex=0
    params.pageSize=6
    params.itemId=id
    Api.listbyItem(params).then(function(res){
      that.goodArray=res.productList.map(item=>{
        if(item.type==3&&item.texture!=null){
          item.bannerList=item.texture.split(',')
        }else{
          item.bannerList=[] 
        }
        return item
      })
      console.log('that.goodArray',that.goodArray);
      that.goodDetail=that.goodArray[that.curretIndex]
      console.log(that.goodDetail)
    })
  },
},
 mounted(){
   let that=this
   that.$refs.banner.getBannerList()
   that.listbyItem(that.$route.query.id)
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
.Info{background: rgba(255, 255, 255, 0.6);margin:0 auto 150px auto; padding: 40px;color:#000;
}
.Case{
  ul{display: flex;flex-wrap: wrap;list-style-type:none;}
  li{width: 33%;margin-top:15px;}
  li img{width: 100%;height: 100%;padding: 0 .5rem;}
}

</style>
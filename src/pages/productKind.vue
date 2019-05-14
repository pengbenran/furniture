<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark"/>
    <Banner/>
    <main> 
      <div class="productKind">
        <div class="KindList" v-for="(item,index) in goodData" @click="changeTab(index)"><a :class="curretIndex==index?'selectOn':''" :href="`#hotProduct${index}`">{{item.kindName}}</a></div>
      </div>  
      <div class="hotProduct" v-for="(item,index) in goodData" :id="`hotProduct${index}`">
       <div class="HotTitle"><img src="../assets/images/productCenter/icon.png"><span>{{item.kindName}}</span></div>
       <div ><ImgList/></div> 
       <div class="btn" @click="jump"><img src="../assets/images/productCenter/more.png"></div>
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
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,ImgList,erCode},
  data () {
    return {
      index:3,
      curretIndex:0,
      goodData:[
        {kindName:'轻北欧风'},
        {kindName:'精致北欧风'},
        {kindName:'经典北欧风'}
      ],
    }
  },
  methods:{
   menu() {
    this.isScroll = window.scrollY>0;
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
  },
  jump(){
    this.$router.push({
      path:`/productlist`
    })
  }
},
 mounted(){
    window.addEventListener('scroll', this.menu)
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
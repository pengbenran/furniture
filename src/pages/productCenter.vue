<template>
  <div class="containt mobileProduct">
    <Header :curretIndex="index" @openMark="showMark" ref='navHeader'/>
    <Banner ref='banner'/>
    <main>
      <div class="container Recommend">
        <div class="row rowNew" @click="toproductInfo(tjLabelGood.goodList[0].id)">
          <div class="col-md-4 col-12 FlexWarp">
              <div class="RecommendInfo">
                  <strong class="tit"><span>特别</span>推荐</strong>
                  <div class="row rowNew">
                    <div class="col-5 col-md-12 Price">
                      <p>{{tjLabelGood.goodList[0].name}}</p>
                      <span>销量：{{tjLabelGood.goodList[0].sales}}</span>
                      <span>￥ {{tjLabelGood.goodList[0].price}}</span>
                    </div>
                    <div class="col-7 col-md-12 info">
                    <strong>商品详情</strong>
                    <ul>
                      <li>{{tjLabelGood.goodList[0].productDeclare}}</li>
                      <li>{{tjLabelGood.goodList[0].measure}}</li>
                      <li>{{tjLabelGood.goodList[0].texture}}</li>
                    </ul>
                  </div>
                  </div>
              </div>
          </div>
          <div class="col-md-4 col-6">
                <div class="RecommendList"><img :src="tjLabelGood.goodList[0].imgUrls[0]"/></div>
          </div>
          <div class="col-md-4 col-6">
                <div class="RecommendList"><img :src="tjLabelGood.goodList[0].imgUrls[1]" /></div>
          </div>          
        </div>
      </div>
      <!--特别推荐 end-->

      <div class="hotProduct" v-for="(item,index) in labelGoodList">
       <div class="HotTitle"><span>{{item.name}}</span></div>
       <div ><ImgList  :goodArry="item.goodList"/></div> 
      </div>
    
  
      <!--网红家具 end-->

      <div class="Nordic">
        <div class="HotTitle"><span>北欧整装</span></div>
        <div class="row">
          <div class="col-md-6 left" @click="to(zhengzLabelGood.goodList[0].id)"><a href="javascript:;"><img :src="zhengzLabelGood.goodList[0].imgUrls[0]" /><span class="tip">{{zhengzLabelGood.goodList[0].measure}}</span></a></div>
          <div class="col-md-6 right">
            <div class="ImgTwo">
              <div @click="to(zhengzLabelGood.goodList[1].id)"><a href="javascript:;"><img :src="zhengzLabelGood.goodList[1].imgUrls[0]" /><span class="tip">{{zhengzLabelGood.goodList[1].measure}}</span></a></div>
              <div @click="to(zhengzLabelGood.goodList[2].id)"><a href="javascript:;"><img :src="zhengzLabelGood.goodList[2].imgUrls[0]" /><span class="tip">{{zhengzLabelGood.goodList[2].measure}}</span></a></div>
            </div>
            <div class="ImgTwo ">
               <div @click="to(zhengzLabelGood.goodList[3].id)"><a href="javascript:;"><img :src="zhengzLabelGood.goodList[3].imgUrls[0]" /><span class="tip">{{zhengzLabelGood.goodList[3].measure}}</span></a></div>
               <div @click="to(zhengzLabelGood.goodList[4].id)"><a href="javascript:;"><img :src="zhengzLabelGood.goodList[4].imgUrls[0]" /><span class="tip">{{zhengzLabelGood.goodList[4].measure}}</span></a></div>
            </div>
          </div>
        </div>
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
import ImgList from "@/components/public/ImgList"
import erCode from '@/components/public/erCode'
import Api from '@/Api/kind'
export default {
  name: 'productCenter',
  components:{Header,Banner,Footer,ImgList,erCode},
  data () {
    return {
      index:3,
      labelGoodList:[],
      tjLabelGood:{goodList:[{name:'',sales:'',price:'',measure:'',texture:'',productDeclare:'',imgUrls:[],id:''}]},
       zhengzLabelGood:{goodList:[{imgUrls:[],measure:''},{imgUrls:[],measure:''},{imgUrls:[],measure:''},{imgUrls:[],measure:''},{imgUrls:[],measure:''}]}
    }
  },
  methods:{
    to(id){
      this.$router.push({
        path:`/productwarp?id=${id}`
      })
    },
    toproductInfo(id){
      this.$router.push({
        path:`/productInfo?id=${id}`
      })
    },
    showMark(){
     this.$refs.erCode.openMark();
   },
   // 获取所有标签
   getLabelList(){
    let that=this
    that.labelGoodList=[]
    Api.getLabelList().then(function(res){
      for(var i in res){
        that.getListbyLabel(res[i],i)
      }
    })
   },
   // 获取标签分类下的商品
   getListbyLabel(row,index){
    let params={}
    let that=this
    params.pageIndex=0
    params.pageSize=6
    params.labelId=row.id
    Api.getListbyLabel(params).then(function(res){
      row.goodList=res.productList
      if(row.name=="特别推荐"){
        that.tjLabelGood=row
      }
      else if(row.name=="北欧整装"){
        that.zhengzLabelGood=row
      }
      else{
        // that.$set(that.labelGoodList,index,row)
        that.labelGoodList.push(row)
      }
    })
   }
},
 mounted(){
   let that=this
   that.$refs.banner.getBannerList()
   that.$refs.navHeader.getRootList()
   that.getLabelList()
  }
}
</script>
<style scoped lang="less">
.Recommend{text-align: left;font-family:"SimHei";padding: 10rem 0;display: flex;align-items: center;margin: 0 auto;
}
.FlexWarp{display: flex;align-items: center;}
.Recommend .tit{display: block;margin-bottom: 2.2rem;font-size: 1.5rem;letter-spacing:8px;}
.Recommend .tit span{border-bottom: .4rem solid #ccc;}
.Price{margin-bottom: 2rem;}
.Price p{font-size: 1.2rem;margin-bottom: 0;}
.Price span{display: block;font-size: 1.1rem;}
.Recommend ul{padding-left: 1.1rem;}
.Recommend .info strong{display: block;margin-bottom: .6rem;font-size: 1.2rem;letter-spacing:5px;}
.Recommend .info li{font-size: 1rem;}
.Recommend img{width: 100%;}
.hotProduct{width: 85%;margin:200px auto;}
.HotTitle{margin-bottom: 80px;}
.HotTitle span{padding: 0 3rem;letter-spacing:10px;border-bottom: 3px solid #ccc;font-size: 1.2rem;}
.Nordic{margin-bottom: 10rem;width: 85%;margin:200px auto;}
.Nordic img{width: 100%;}
.Nordic  a{position: relative;display: inline-block;overflow: hidden;width: 100%;}
.Nordic  .tip{position: absolute;bottom:10%;background: rgb(191,191,191);color: #fff;padding: .5rem 1rem;left: -4rem;;opacity: 0;transition: all 0.5s;}
.Nordic  a:hover .tip{opacity: 1;left: 0;}
.Nordic .right span{font-size: .9rem; padding: .2rem .5rem;}
.Nordic .HotTitle{margin-bottom: 3rem;}
.Nordic .right{display: flex;flex-direction: column;justify-content: space-between;}
.Nordic .right .ImgTwo{width: 100%;display: flex;justify-content: space-between; }
.Nordic .right .ImgTwo>div{width: 48%;}

@media (max-width: 768px) {
.Recommend{flex-wrap: wrap; 
  .RecommendInfo{width: 100%;}
  .RecommendList{width: 50%;}
} 

}
</style>
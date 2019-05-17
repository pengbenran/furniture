<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" v-for="(item,index) in bannerList" :data-slide-to="index" :class="index==0?'active':''" ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" :class="index==0?'active':''" v-for="(item,index) in bannerList">
          <img class="d-block w-100" :src="item.imgUrl">
        </div>
      </div>
    </div>
</template>
<script>
import Api from '@/Api/banner'
export default {
    data(){
      return{
        bannerList:[]
      }
    },
    methods:{
      getBannerList(){
        let params={}
        let that=this
        params.pageIndex=1
        params.pageSize=5
        Api.HomeBannerList().then(function(res){
          that.bannerList=res
          console.log(that.bannerList)
        })
      }
    }
}
</script>
<style scoped>

</style>

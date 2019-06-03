<template>
    <div class="mobilePinfo">
       <div class="Fan"><span @click="to">《 返回上一页</span></div>
       <!--<div class="Main">
            <div class="list" @click="changTab(index)" :class ="selectIndex == index ? 'select':''" v-for="(item,index) in decorateList">{{item.name}}</div>
        </div>-->
        <!--Main end-->
        <div class="container ListWarp">
            <DesignerList :List='List'/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import DesignerList from "@/components/public/DesignerList"
import Api from '@/Api/designer'
export default {
    components:{Footer,DesignerList},  
    data () {
         return {
            List:[],
            selectDecorate:{},
            selectIndex:0,
            ItemId:''
         }
    },
    methods: {
        to(){
            this.$router.go(-1)
        },
    //     changTab(index){
    //       this.selectIndex=index
    //       this.selectDecorate=this.decorateList[index]
    //   },
        // 装饰设计列表
        getDecorate(){
          let params={};
          let that=this
          params.pageIndex=1
          params.pageSize=100
          Api.getByIdProductItemList(that.ItemId,params).then(function(res){
            that.List=res
            // console.log(that.decorateList)
            // that.selectDecorate=that.decorateList[0]
        })
      },
    },
    mounted(){
    //    this.getDecorate()
       this.ItemId = this.$route.query.id;
       this.getDecorate();
    //    that.$route.query.id
    }
}
</script>
<style scoped>
.Fan{margin-bottom: 1rem;text-align: left;width: 80%;margin:20px auto;}
.select{color: #379589;}
.Fan span{color: #0e887a;text-decoration: none;}
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}
@media (max-width: 767px) {
  .Main{width:100%}
}
</style>

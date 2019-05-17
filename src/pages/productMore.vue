<template>
    <div class="mobilePinfo">
       <div class="Fan"><span @click="to">《 返回上一页</span></div>
       <div class="Main">
            <div class="list" @click="changTab(index)" :class ="selectIndex == index ? 'select':''" v-for="(item,index) in decorateList">{{item.name}}</div>
        </div>
        <!--Main end-->
        <div class="container ListWarp">
            <productMoreList :selectDecorate='selectDecorate'/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import productMoreList from "@/components/public/productMoreList"
import Api from '@/Api/designer'
export default {
    components:{Footer,productMoreList},  
    data () {
         return {
            decorateList:[],
            selectDecorate:{},
            selectIndex:0,
         }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/Designer`
            })
        },
        changTab(index){
          this.selectIndex=index
          this.selectDecorate=this.decorateList[index]
      },
        // 装饰设计列表
        getDecorate(){
          let params={};
          let that=this
          params.pageIndex=1
          params.pageSize=100
          params.key=''
          Api.getDecorateList(params).then(function(res){
            that.decorateList=res
            console.log(that.decorateList)
            that.selectDecorate=that.decorateList[0]
        })
      },
    },
    mounted(){
       this.getDecorate()
    }
}
</script>
<style scoped>
.Fan{margin-bottom: 1rem;text-align: left;width: 80%;margin:20px auto;}
.select{color: #379589;}
.Fan span{color: #0e887a;text-decoration: none;}
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}
</style>

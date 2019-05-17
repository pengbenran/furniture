<template>
    <div class="mobilePinfo">
        <div class="Main">
            <div class="list" :class="curretIndex==index?'selectOn':''" v-for="(item,index) in KindData"  @click="changeTab(index)">{{item.itemName}}</div>
        </div>
        <!--Main end-->
        <div class="container ListWarp">
            <ImgList :goodArry="goodList"/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import ImgList from "@/components/public/ImgList2"
import Api from '@/Api/kind'
export default {
    components:{Footer,ImgList},  
    data () {
         return {
           curretIndex:0,
           KindData:[],
           goodList:[]
         }
    },
    mounted(){
        let that=this
        that.getItemsByParentId(that.$route.query.id)
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productCenter`
            })
        },
         // 根据父id获取子分类
         getItemsByParentId(parentId){
            let params={}
            let that=this
            params.parentId =parentId 
            that.KindData=[]
            Api.getItemsByParentId(params).then(function(res){
                that.KindData=res
                that.listbyItem(res[0])
            })
        },
        // 获取改分类下的商品
        listbyItem(row){
            let params={}
            let that=this
            params.pageIndex=0
            params.pageSize=50
            params.itemId=row.id
            Api.listbyItem(params).then(function(res){
              that.goodList=res      
          })
        },
        changeTab(index){
            let that=this
            that.curretIndex=index
            that.listbyItem(that.KindData[index])
        },
    }
}
</script>
<style scoped>
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}
.Main .selectOn{color:#0e887a;}
</style>

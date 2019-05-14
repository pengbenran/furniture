<template>
    <div class="mobilePinfo">
        <div class="Main">
            <div class="list" :class="curretIndex==index?'selectOn':''" v-for="(item,index) in goodData"  @click="changeTab(index)">{{item.kindName}}</div>
        </div>
        <!--Main end-->
        <div class="container ListWarp">
            <ImgList/>
            <ImgList/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import ImgList from "@/components/public/ImgList2"
export default {
    components:{Footer,ImgList},  
    data () {
         return {
            curretIndex:0,
            goodData:[
            {kindName:'轻北欧风'},
            {kindName:'精致北欧风'},
            {kindName:'经典北欧风'}
            ],
         }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productCenter`
            })
        },
        changeTab(index){
            let that=this
            that.curretIndex=index
        },
    }
}
</script>
<style scoped>
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}
.Main .selectOn{color:#0e887a;}
</style>

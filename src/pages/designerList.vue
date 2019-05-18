<template>
    <div class="mobilePinfo">
        <!--Main end-->
        <div class="container ListWarp">
            <ImgList :imgReels="imgReels"/>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import ImgList from "@/components/public/ImgList3"
import Api from '@/Api/designer'
export default {
    components:{Footer,ImgList},  
    data () {
         return {
           curretIndex:0,
           imgReels:[]
         }
    },
    mounted(){
        let that=this
        that.getDecorateDetail(that.$route.query.id)
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productCenter`
            })
        },
         // 根据父id获取子分类
         getDecorateDetail(id){
            let params={}
            let that=this
            params.id =id 
            Api.getDecorateDetail(params).then(function(res){
                that.imgReels=res.imgReels
            })
        },
    }
}
</script>
<style scoped>
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}
.Main .selectOn{color:#0e887a;}
</style>

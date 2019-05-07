<template>
    <div class="mobilePinfo">
        <div class="container Main ">
            <div class="Fan"><span @click="to">《 返回上一页</span></div> 
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
import ImgList from "@/components/public/ImgList"
export default {
    components:{Footer,ImgList},  
    data () {
         return {
            
         }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productCenter`
            })
        }
    }
}
</script>
<style scoped>
.Main{text-align: left;margin-top: 8rem;margin-bottom: 8rem;}


.Main .Fan{margin-bottom: 1rem;}
.Main .Fan span{color: #0e887a;text-decoration: none;}
.ListWarp{margin-bottom: 8rem;}

</style>

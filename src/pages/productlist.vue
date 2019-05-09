<template>
    <div class="mobilePinfo">
        <div class="Main">
            <div class="list">轻北欧风</div>
            <div class="list">精致北欧风</div>
            <div class="list">经典欧风</div>
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
.Main{display:flex;justify-content:space-around;width:50%;margin:50px auto;}
.ListWarp{margin-bottom: 8rem;}

</style>

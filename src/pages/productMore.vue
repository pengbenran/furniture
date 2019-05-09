<template>
    <div class="mobilePinfo">
       <div class="Fan"><span @click="to">《 返回上一页</span></div>
       <div class="Main">
            <div class="list select">三室一厅</div>
            <div class="list">两室一厅</div>
            <div class="list">一室独居</div>
            <div class="list">公司装修</div>
            <div class="list">其他类型</div>
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
import ImgList from "@/components/public/ImgList3"
export default {
    components:{Footer,ImgList},  
    data () {
         return {
            
         }
    },
    methods: {
        to(){
            this.$router.push({
                path:`/Designer`
            })
        }
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

<template>
    <div>
        <div class="container Main">
            <!-- <div class="Fan"><a href="javasrcipt:;">《返回上一页</a></div> -->
            <div class="Info">
               <img src="../assets/images/newsCenter/detail.png" class="d-block w-100">
            </div>
        </div>
         <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
export default {
     components:{Footer},
     data(){
     	return{
     	}
     }
}
</script>
<style scoped>
.Main{margin-top: 6rem;text-align: left;}
.Info{margin: 6rem 0;}
</style>

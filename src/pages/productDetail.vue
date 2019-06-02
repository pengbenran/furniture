<template>
    <div>
        <div class="container Main">
            <div class="Info" v-html="parductDetail.imgUrls[0]">
        
            </div>
        </div>
         <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import Api from "@/Api/designer"
export default {
     components:{Footer},
     data(){
     	return{
            parductDetail:{imgUrls:[0]}
     	}
     },
     methods:{
        getProductDetail(id){
            let params={}
            params.id=id
            let that=this
            Api.getProductDetail(params).then(function(res){
                that.parductDetail=res
            })
        },
     },
     mounted(){
        let that=this
        that.getProductDetail(that.$route.query.id)
     }
}
</script>
<style scoped>
.Main{margin-top: 6rem;text-align: left;}
.Info{margin: 6rem 0;}
.Info>>>  img{width: 100% !important;height: 100% !important;display: block;}
.Fan a{color:#0e887a;text-decoration: none;}
</style>

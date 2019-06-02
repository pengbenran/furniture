<template>
    <div>
        <div class="container Main">
            <div class="Fan"><span @click="to">《 返回上一页</span></div>
            <div class="Info" v-html="newDateDetail.subject">
        
            </div>
        </div>
         <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import Api from "@/Api/news"
export default {
     components:{Footer},
     data(){
     	return{
            newDateDetail:{}
     	}
     },
     methods:{
        getNewsDetail(id){
            let params={}
            params.id=id
            let that=this
            Api.newsDetail(params).then(function(res){
                that.newDateDetail=res
            })
        },
         to(){
            this.$router.go(-1)
        },
     },
     mounted(){
        let that=this
        that.getNewsDetail(that.$route.query.id)
     }
}
</script>
<style scoped>
.Main{margin-top: 6rem;text-align: left;}
.Info{margin: 6rem 0;}
.Info>>> img{width: 100%;height: 100%;display: block;}
.Fan a{color:#0e887a;text-decoration: none;}
</style>

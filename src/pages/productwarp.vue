<template>
    <div class="mobilePinfo">
        <div class="container Main ">
            <div class="Fan"><span @click="to">《 返回首页</span></div>
            <div class="row Warp">
                <div class="col-md-7 WarpImg">
                    <div class="Left"><img src="../assets/images/productCenter/hot2.png" /></div>
                    <div class="right">
                        <div><img src="../assets/images/productCenter/up.png" /></div>
                        <div class="ImgList">
                           <div><img src="../assets/images/productCenter/hot2.png"/></div>
                           <div><img src="../assets/images/productCenter/hot2.png"/></div>
                           <div><img src="../assets/images/productCenter/hot2.png"/></div>
                        </div>
                        <div><img src="../assets/images/productCenter/bw.png" /></div>
                    </div>
                </div>
                <div class="col-md-5 WarpInfo">
                    <div>
                        <div class="infoTit">极简主义</div>
                        <div class="info">
                        极简主义的浪漫，邂逅一场极简主义的浪漫，极简主义的浪漫，邂逅一场极简主义的浪漫。 极简主义的浪漫，邂逅一场极简主义的浪漫。
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        <!--Main end-->

        <div class="container"><div class="Tit"><span>整体特色</span></div></div>
        <div class="container Shopinfo">
          极简主义的浪漫，邂逅一场极简主义的浪漫，极简主义的浪漫，邂逅一场极简主义的浪漫。 极简主义的浪漫，邂逅一场极简主义的浪漫。
          极简主义的浪漫，邂逅一场极简主义的浪漫，极简主义的浪漫，邂逅一场极简主义的浪漫。 极简主义的浪漫，邂逅一场极简主义的浪漫。
          极简主义的浪漫，邂逅一场极简主义的浪漫，极简主义的浪漫，邂逅一场极简主义的浪漫。 极简主义的浪漫，邂逅一场极简主义的浪漫。
        </div>
        <!--Table end-->
        
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
export default {
    components:{Footer},  
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
.WarpImg{display: flex;align-items: center}
.WarpImg .Left{width: 82%;text-align: center;}
.WarpImg .right{width: 18%;text-align: center;}
.WarpImg img{width: 100%;}

.Main .Fan{margin-bottom: 1rem;}
.Main .Fan span{color: #0e887a;text-decoration: none;}
.WarpInfo{display: flex;align-items: center;justify-content: center;}
.WarpInfo .info{text-indent:2rem;letter-spacing: .2rem;}
.infoTit{font-size: 2.2rem;text-align: center;margin-bottom: 1.2rem;}
.Shopinfo{text-align: left;text-indent:2rem;margin-bottom: 8rem;}
.Tit{border-bottom: 2px solid #000;text-align: left;margin-bottom: 2rem;}
.Tit span{background: #000;color: #fff;padding: .2rem 1rem;}

</style>

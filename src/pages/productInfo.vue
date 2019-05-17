<template>
    <div class="mobilePinfo">
        <div class=" Main ">
            <div class="Fan"><span @click="to">《 返回上一页</span></div>
            <div class="row Warp">
                <div class="col-md-7 WarpImg">
                    <div class="Left"><img :src="goodDetail.imgUrls[0]" /></div>
                    <div class="right">
                        <div class="icon"><img src="../assets/images/productCenter/up.png" /></div>
                        <div class="ImgList">
                           <div v-for="(item,index) in goodDetail.imgUrls"><img :src="item"/></div>
                        </div>
                        <div class="icon"><img src="../assets/images/productCenter/bw.png" /></div>
                    </div>
                </div>
                <div class="col-md-5 WarpInfo">
                    <div>
                        <div class="Name">{{goodDetail.name}}</div>
                        <div class="Price"><span>￥{{goodDetail.price}}</span><label>销量：{{goodDetail.sales}}份</label></div>
                        <div class="Btn"><span><a :href="goodDetail.taobaoLink">进入店铺购买》</a></span></div>
                    </div>
                </div>               
            </div>
        </div>
        <!--Main end-->

        <div class="Tit"><span>商&nbsp;品&nbsp;信&nbsp;息</span></div>
        <div class="Table">
            <table class="table table-bordered">
            <thead><tr><th scope="col">数量</th><th scope="col" colspan="3"></th></tr></thead>
            <tbody>
                <tr><th scope="row">尺寸</th><td colspan="3">{{goodDetail.measure}}</td></tr>
                <tr><th scope="row">材质</th><td colspan="3">{{goodDetail.texture}}</td></tr>
                <tr><th scope="row">说明</th><td colspan="3">{{goodDetail.productDeclare}}</td></tr>
            </tbody>
            </table>
        </div>
        <!--Table end-->
        
        <Footer/>
    </div>
</template>
<script>
import Footer from "@/components/public/footer";
import Api from "@/Api/goods"
export default {
    components:{Footer},  
    data () {
         return {
            goodDetail:{imgUrls:[]}
         }
    },
    mounted(){
        let that=this
        that.getGoodDetail(that.$route.query.id)
    },
    methods: {
        to(){
            this.$router.push({
                path:`/productCenter`
            })
        },
        getGoodDetail(id){
            let params={}
            let that=this
            params.id=id
            Api.getGoodDetail(params).then(function(res){
                that.goodDetail=res
            })
        }
    }
}
</script>
<style scoped>
.Main{text-align: left;width: 85%;margin:100px auto 200px auto;}
.WarpImg{display: flex;align-items: center}
.WarpImg .Left{width: 81%;text-align: center;}
.WarpImg .right{width: 18%;text-align: center;}
.WarpImg .right .icon{width:50%;margin:0 auto;}
.WarpImg img{width: 100%;}

.Main .Fan{margin-bottom: 123px;}
.Main .Fan span{color: #0e887a;text-decoration: none;}
.WarpInfo{display: flex;align-items: center;justify-content: center;}
.WarpInfo .Price,.WarpInfo .Btn{text-align: center;margin-bottom: 1.2rem;font-size: 18px;}
.WarpInfo .Name{font-size:36px;letter-spacing:8px;font-weight: bold;margin-bottom: 1.5rem;}
.WarpInfo .Price span{color: #0e887a;font-size: 30px;font-weight: bold;margin: 0 1rem;}
.WarpInfo .Price label{font-size: 24px;margin: 0 1rem;}
.WarpInfo .Btn span {display: inline-block;border:3px solid #0e887a;color:#0e887a;padding: .2rem 2rem;border-radius: .4rem;}
.WarpInfo .Btn span a{color:#0e887a;text-decoration: none;}

.Tit{border-bottom: 2px solid #000;width:82%;text-align: left;margin:133px auto 65px auto;font-size: 22px;font-family: SimHei;}
.Tit span{background: #000;color: #fff;height: 30px;display: block;width: 150px;text-align: center;}
.Table{width: 82%;margin:0 auto 200px auto;font-family: SimHei;font-size: 18px;}
.Table td{text-align: left;padding-left: 50px;box-sizing: border-box;font-size: 14px;}
</style>

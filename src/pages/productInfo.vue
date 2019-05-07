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
                        <div class="Name">LOKI 铁制书桌灯</div>
                        <div class="Price"><span>￥124</span><label>销量：1份</label></div>
                        <div class="Btn"><span>进入店铺购买》</span></div>
                    </div>
                </div>               
            </div>
        </div>
        <!--Main end-->

        <div class="container"><div class="Tit"><span>商品信息</span></div></div>
        <div class="container Table">
            <table class="table table-bordered">
            <thead><tr><th scope="col">数量</th><th scope="col" colspan="3"></th></tr></thead>
            <tbody>
                <tr><th scope="row">尺寸</th><td colspan="3">长 27 * 宽 18 * 高 53cm</td></tr>
                <tr><th scope="row">材质</th><td colspan="3">灯体：黑色 灯罩：透明 灯体：铁 灯罩：玻璃</td></tr>
                <tr><th scope="row">说明</th><td colspan="3">你好世界阿斯达所</td></tr>
            </tbody>
            </table>
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
.WarpInfo .Price,.WarpInfo .Btn{text-align: center;margin-bottom: 1.2rem;}
.WarpInfo .Name{font-size: 1.5rem;letter-spacing:8px;font-weight: bold;margin-bottom: 1.5rem;}
.WarpInfo .Price span{color: #0e887a;font-size: 1.1rem;font-weight: bold;margin: 0 1rem;}
.WarpInfo .Price label{font-size: .9rem;margin: 0 1rem;}
.WarpInfo .Btn span{display: inline-block;border:3px solid #0e887a;color:#0e887a;padding: .2rem 2rem;border-radius: .4rem;}

.Tit{border-bottom: 2px solid #000;text-align: left;margin-bottom: 2rem;}
.Tit span{background: #000;color: #fff;padding: .2rem 1rem;}
.Table{margin-bottom: 10rem;}
</style>

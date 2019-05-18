<template>
    <div class="mobilePinfo">
        <div class=" Main ">
            <div class="Fan"><span @click="to">《 返回上一页</span></div>
            <div class="row Warp">
                <div class="col-md-7 WarpImg">
                    <div class="Left"><img :src="SelectImgUrl" /></div>
                    <div class="right">
                        <div class="icon" @click="up"><img src="../assets/images/productCenter/up.png" /></div>
                        <div class="ImgList">
                         <div v-for="(item,index) in goodDetail.imgUrls" :class="selectIndex==index ? 'ItmeOn':''" @click="SelectImg(index,item)"><img :src="item"/></div>
                     </div>
                     <div class="icon" @click="down"><img src="../assets/images/productCenter/bw.png" /></div>
                 </div>
                </div>
                <div class="col-md-5 WarpInfo">
                    <div>
                        <div class="infoTit">{{goodDetail.name}}</div>
                        <div class="info">
                        {{goodDetail.productDeclare}}
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        <!--Main end-->

        <div class="Tit"><span>整体特色</span></div>
        <div class="Shopinfo">
          {{goodDetail.texture}}
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
            goodDetail:{imgUrls:[]},
            SelectImgUrl:'',
            selectIndex:0
         }
    },
    mounted(){
        let that=this
        that.getGoodDetail(that.$route.query.id)
    },
    methods: {
        to(){
             this.$router.go(-1)
        },
        getGoodDetail(id){
            let params={}
            let that=this
            params.id=id
            Api.getGoodDetail(params).then(function(res){
                that.goodDetail=res
                that.SelectImgUrl = that.goodDetail.imgUrls[0]
                console.log('that.goodDetail',that.goodDetail)
            })
        },
          //选择图片
        SelectImg(index,url){
            let that = this;
            that.selectIndex = index;
            that.SelectImgUrl = url;
        },

        up(){
            if(this.selectIndex > 0){
                this.selectIndex = this.selectIndex - 1;
                this.SelectImgUrl = this.goodDetail.imgUrls[this.selectIndex];
            } 
        },

        down(){
            if(this.selectIndex < this.goodDetail.imgUrls.length-1){
                this.selectIndex = this.selectIndex + 1;    
                this.SelectImgUrl = this.goodDetail.imgUrls[this.selectIndex];
            }
        }
    }
}
</script>
<style scoped>
.Main{text-align: left;width: 85%;margin:100px auto 200px auto }
.WarpImg{display: flex;align-items: center;justify-content: space-between;}
.WarpImg .Left{width: 72%;text-align: center;}
.WarpImg .right{width: 22%;text-align: center;}
.WarpImg .right .icon{width:50%;margin:0 auto;}
.WarpImg img{width: 100%;}

.ImgList{height: 32rem;overflow: auto;margin: 1rem 0;}
.ImgList div{margin: .5rem 0;border-radius: 10px;overflow: hidden;}
/* .ImgList div img{} */
.ImgList::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
.ItmeOn{
border:1px solid #0e887a;
}

.Main .Fan{margin-bottom: 1rem;}
.Main .Fan span{color: #0e887a;text-decoration: none;}
.WarpInfo{display: flex;align-items: center;justify-content: center;}
.WarpInfo .info{text-indent:2rem;letter-spacing: .2rem;font-size: 24px;}
.infoTit{font-size: 36px;text-align: center;margin-bottom: 1.2rem;font-weight: bold;}
.Shopinfo{text-align: left;text-indent:2rem;margin-bottom: 8rem;width: 84%;margin:0 auto 200px auto;font-size:18px;font-family:SimHei;font-weight: bold;}
.Tit{border-bottom: 2px solid #000;text-align: left;margin-bottom: 2rem;width: 82%;margin:133px auto 65px auto;}
.Tit span{background: #000;color: #fff;padding: .2rem 1rem;}

</style>

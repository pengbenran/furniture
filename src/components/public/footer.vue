<template>
   <div class="footer">
     <div class="footer_Nav">
        <div class="container">
            <div class="row">
                <div class="col-md-4 case">
                    <div class="Left"><img src="../../assets/phone.png" alt="联系电话"/></div>
                    <div class="line"></div>
                    <div class="right">
                        <strong>联系电话</strong>
                        <p>办公司电话：（028）8336 8327</p>
                        <p>手机：18980699677</p>                
                    </div>
                </div>
                <div class="col-md-4 case">
                    <div class="Left"><img src="../../assets/address.png" alt="办公地址"/></div>
                    <div class="line"></div>
                    <div class="right">
                        <strong>办公地址</strong>
                        <p>成都市金牛区天力商务楼501室</p>              
                    </div>
                </div>
                <div class="col-md-4 case">
                    <div class="Left"><img src="../../assets/time.png" alt="工作时间"/></div>
                    <div class="line"></div>
                    <div class="right">
                        <strong>工作时间</strong>
                        <p>周一至周六</p>
                        <p>早上8:30 - 下午17:30</p>                
                    </div>
                </div>
            </div>

        </div>
        <!--footer end-->
     </div>


   <div class="bq">版权所有 &copy; 2018 四川匠兴日升木业有限责任公司 保留所有版权 粤ICP备05046166号-8</div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer_Nav{  padding-top: 4%;padding-bottom: 3%; }
.footer{
  font-size: 15px;
 background-image: url('../../assets/footerBcg.png');
 padding-bottom: 8px;
}
.footer .case div{
    float: left;
}
.footer .right{text-align: left;margin-left: 6px;}
.footer .Left{margin: 0 8px;height: 100%;padding-top: 20px;}
.footer .Left img{height: 40px;}
.footer .right p{margin-bottom: 2px;}
.footer .right strong{display: inline-block;padding: 4px 0;}
.footer .line{height: 100%;width: 2px;background: #ccc;}
.bq{width: 100%;text-align: center;font-weight: 100;color: #666;}
</style>

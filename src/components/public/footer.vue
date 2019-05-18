<template>
   <div class=" footer">
    <div class="container footer_Nav">
        <div class="row">
            <div class="col-md-4 footer_NavList">
             <div class="Left"><img src="../../assets/phone.png" alt="联系电话"/></div>
            <!-- <div class="line"></div> -->
            <div class="right">
                <div>
                  <strong>联系电话</strong>
                  <p>办公司电话：（028）8336 8327</p>
                  <p>手机：18980699677</p>   
                </div>     
            </div>  
            </div>
            <div class="col-md-4  footer_NavList">
                 <div class="Left"><img src="../../assets/address.png" alt="办公地址"/></div>
                <!-- <div class="line"></div> -->
                <div class="right">
                    <div>
                     <strong>办公地址</strong>
                     <p>成都市金牛区天力商务楼501室</p>  
                    </div>       
                </div>   
            </div>
            <div class="col-md-4  footer_NavList">
                <div class="Left"><img src="../../assets/time.png" alt="工作时间"/></div>
                <!-- <div class="line"></div> -->
                <div class="right">
                    <div>
                     <strong>工作时间</strong>
                     <p>周一至周六</p>
                     <p>早上8:30 - 下午17:30</p>  
                    </div>
                </div>
            </div>
        </div>

     </div>
   <div class="bq">版权所有 &copy; 2018 四川匠兴日升木业有限责任公司 保留所有版权</div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="less">
.footer_Nav{padding-top: 4%;padding-bottom: 3%;text-align: left;
    .footer_NavList{
        // border-left: 2px solid #ccc ;
        display: flex;justify-content:center;
        padding-top:5px;
        padding-left: 10px;
        box-sizing: border-box;
        height: 80px;
    } 
    .footer_NavList p{margin-bottom: 0;}
    .footer_NavList .Left{display: flex;align-items: center;width: 4rem;justify-content: center;}
}
.footer{
  font-size: 15px;
 background-image: url('../../assets/footerBcg.png');
 padding-bottom: 8px;
}
.footer .right{text-align: left;margin-left: 6px;}
.footer .Left{height: 100%;padding-right: 15px;box-sizing: border-box;}
.footer .Left img{height: 40px;}
.footer .right p{margin-bottom: 2px;}
.footer .right strong{display: inline-block;padding: 4px 0;}
// .footer .line{height: 100%;width: 2px;background: #ccc;margin: 0 .4rem;}
.bq{width: 100%;text-align: center;font-weight: 100;color: #666;}



.footer_NavList .right{
position: relative;
margin: 0 auto;
width: 100%;
border-left: 2px solid #ccc;
}
.footer_NavList .right div{
    padding-left: 10px;
box-sizing: border-box;
position: absolute;
top: 50%;
/* 这里有兼容性问题 */
-webkit-transform: translateY(-50%);
-ms-transform: translateY(-50%);
-o-transform: translateY(-50%);
transform: translateY(-50%);
}
</style>

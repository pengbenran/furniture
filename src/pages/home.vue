<template>
  <div class="containt">
    <Header/>
    <!-- banner图 -->
   <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="2000">
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox" >
        <div class="item active">
          <img src="../assets/banner.jpg" alt="..." class="img-responsive">
        </div>
        <div class="item">
          <img src="../assets/banner.jpg" alt="..." class="img-responsive">
        </div>
        <div class="item">
          <img src="../assets/banner.jpg" alt="..." class="img-responsive">
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 关于我们 -->
      <div class="row magTop">
        <div class="col-xs-6">
          <a href="#" class="thumbnail">
            <img src="../assets/company.png" alt="...">
          </a>
        </div>
        <div class="col-xs-6">

        </div>
      </div>
       <!-- 产品分类 -->
       <div class="row magTop">
        <div class="col-xs-2 col-xs-offset-2">
          <a href="#" class="thumbnail">
            <img src="../assets/kind.png" alt="...">
          </a>
        </div>
        <div class="col-xs-2">
          <a href="#" class="thumbnail">
            <img src="../assets/kind.png" alt="...">
          </a>
        </div>
        <div class="col-xs-2">
          <a href="#" class="thumbnail">
            <img src="../assets/kind.png" alt="...">
          </a>
        </div>
        <div class="col-xs-2">
          <a href="#" class="thumbnail">
            <img src="../assets/kind.png" alt="...">
          </a>
        </div>
        <div class="col-xs-2">

        </div>
      </div>
      <!-- 热销产品 -->
      <div class="row magTop">
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
        <div class="col-xs-4">
          <a href="#" class="thumbnail">
            <img src="../assets/good1.png" alt="...">
          </a>
        </div>
      </div>
    </div>
     <!-- 设计师中心 -->
     <div class="row magTop">
      <div class="col-xs-12">
        <img src="../assets/desigen.png" class="img-responsive">
      </div>
    </div>
    <div class="row magTop">
      <div class="col-xs-8">
        <img src="../assets/desigen1.png" class="img-responsive">
      </div>
      <div class="col-xs-4">
        <p>你想要的设计&nbsp;&nbsp;&nbsp;我们都有</p>
        <p>找设计&nbsp;&nbsp;&nbsp;到七音</p>
      </div>
    </div> 
    <div class="footer magTop">
      <div class="container">
        <div class="row">
          <div class="col-xs-4 displayFlex">
            <div class="icon">
              <img src="../assets/phone.png" class="img-responsive">
            </div>
            <div class="intro">
              <p class="title">联系电话</p>
              <p>办公室电话:(026)83368227</p>
              <p>手机:18980699677</p>
            </div>
          </div>
          <div class="col-xs-4 displayFlex">
            <div class="icon">
              <img src="../assets/address.png" class="img-responsive">
            </div>
            <div class="intro">
              <p class="title">办公地址</p>
              <p>成都市金牛区天力商务楼501室</p>
            </div>
          </div>
          <div class="col-xs-4 displayFlex">
            <div class="icon">
              <img src="../assets/time.png" class="img-responsive">
            </div>
            <div class="intro">
              <p class="title">工作时间</p>
              <p>周一至周六</p>
              <p>早上8:30-下午17:30</p>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </div> 
  </div>

</template>
<script>
import Header from "@/components/public/nav";
export default {
  components:{Header},
  name: 'Home',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containt{
  position: relative;
}
.navbar{
position: absolute;
top:0;
z-index: 10;
width: 100%;
}
.navbar-header{
 padding-left: 100px;
 padding-right: 123px;
 box-sizing: border-box;
}
.row{
  margin: 0;
}
a{
  color: #fff;
}
a:hover{ 
 color: #379589;
 background-color: transparent !important;
}
a:focus{
  color: #379589;
  background-color: transparent !important; 
}
.magTop{
  margin-top:50px; 
}
.positionRelative{
  position: relative;
  padding-top: 5%;
  box-sizing: border-box;
}
.positionAbsolute{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.icon{
  height: 70px;
  width: 70px;
  padding: 10px;
  box-sizing: border-box;
}
.displayFlex{
  display: flex;
}
.intro{
  flex-grow: 0.8;
  text-align: left;
  padding: 10px;
  border-left: 1px solid #A5A5A5;
  box-sizing: border-box;
}
.title{
  /*font-size: 18px;*/
  font-weight: bold;
}
.container{
  width: 90%;
}
.footer{
  padding-top: 5%;
  padding-bottom: 5%;
  box-sizing: border-box;
  background-image: url('../assets/footerBcg.png');
}
</style>

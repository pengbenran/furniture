<template>
  <div class="containt">
  	<Header/>
   <Banner/>
    <div class="cartImg marginTop">
		<img src="static/images/designer/connect.png" class="d-block w-100">
	</div>
   <div class="title">
   	<h1>01/</h1><h2>产品设计</h2>
   </div>
   <p class="intro">流程介绍：您可以根据您的想法提供设计稿，而我们则负责实现您的想法</p>
   <div class="floor">
   	<div class="floorleft">
   		<img src="static/images/designer/1.png" class="d-block w-100">
   	</div>
   	<div class="floorright">
   		<div class="floortop">
   			<div class="floortopleft">
   				<img src="static/images/designer/2.png" class="d-block w-100">
   			</div>
   			<div class="floortopright">
   				<img src="static/images/designer/3.png" class="d-block w-100">
   			</div>
   		</div>
   		<div class="floortop">
   			<div class="floortopleft">
   				<img src="static/images/designer/4.png" class="d-block w-100">
   			</div>
   			<div class="floortopright">
   				<img src="static/images/designer/5.png" class="d-block w-100">
   			</div>
   		</div>	
   	</div>
   </div>
   <!-- 装饰设计 -->
   <div class="title2">
   	<h1>02/</h1><h2>装饰设计</h2>
   </div>
   <ul class="cart">
   	<li class="select">三室一厅</li>
   	<li>两室一厅</li>
   	<li>一室独居</li>
   	<li>公司装修</li>
   	<li>其他类型</li>
   </ul>
	<div class="cartImg">
		<img src="static/images/designer/cartImg.png" class="d-block w-100">
	</div>
	<div class="title marginTop">
   	<h1>03/</h1><h2>金牌设计师</h2>
   </div>
   <!-- <div class="floor3">
   	<div class="cardList">
   		<div class="avator">
   			<img class="card-img-top" src="static/images/designer/avator.png" alt="Card image cap">
   		</div>
   		<div class="card-body">
   			<h5 class="card-title">张三</h5>
   			<p class="card-text">性别:男 年龄:26</p>
   			<p class="card-text">毕业于四川美术学院室内设计系， 之前工作过三家装修公司。具有丰富的 设计经验，对于装修和设计有自己独特的眼光和 技巧。为人平和</p>
   			<a href="#" class="btn btn-primary">点击查看作品>></a>
   		</div>
   	</div>
   </div> -->
   <Footer/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Banner from "@/components/public/banner";
import Footer from "@/components/public/footer";
export default {
  components:{Header, Banner,Footer},
  name: 'Designer',
  data () {
    return {
     
    }
  }
}
</script>
<style scoped lang="less">
 .marginTop{
	margin-top: 30px;
 } 
 .title{
 	margin-top: 50px;
 	margin-bottom: 10px;
 	text-align: center;
 	h1{
 		display: inline-block;
 		color:#C5C5C5;
 	}
 	h2{
 		display: inline-block;
 	}
 }
 .title2{
 	background: #AECEC4;
 	margin-top: 50px;
  	text-align: center;
 	padding: 35px 0 15px 0;
 	box-sizing: border-box;
 	h1{
 		display: inline-block;
 		color:#DFDFDF;
 	}
 	h2{
 		display: inline-block;
 		color:#fff;
 	}
 }
 .cart{
 	list-style: none;
 	width: 100%;
 	margin: 0 auto;
 	padding: 0;
 	background: #AECEC4;
 	li{
 		display: inline-block;
 		width: 15%;
 		text-align: center;
 		height: 150px;
 		line-height: 150px;
 		color:#fff;
 	}
 	.select{
		color:#1B8D80;
 	}
 }
 .cartImg{
 	width: 100%;
 }
 .intro{
	font-size: 12px;
 }
 .floor{
 	width: 90%;
 	margin: 0 auto;
 	display: flex;
 	justify-content: space-around;
 	.floorleft{
 		width: 32%;
 	}
 	.floorright{
 		width:67.5%;
 		display: flex;
 		flex-direction:column;
 		justify-content: space-between; 
 		.floortop{
 			display: flex;
 			justify-content: space-between;
 			div{
 				width: 49.8%;
 			}
 		}
 	}
 }
 .floor3{
 	width: 90%;
 	margin: 30px auto;
 	display: flex;
 	.cardList{
 		width: 33%;
 		background: #DADBDB;
 		padding: 20px;
 		box-sizing: border-box;
 		.avator{
 			width: 100px;
 			height: 100px;
 			margin: 20px auto;
 		}
 	}
 }
@media (max-width: 767px) { 
 .cart{
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #AECEC4;
  li{
    display: inline-block;
    width: 30%;
    text-align: center;
    height: 70px;
    line-height: 70px;
    color:#fff;
  }
  .select{
    color:#1B8D80;
  }
}
}


</style>
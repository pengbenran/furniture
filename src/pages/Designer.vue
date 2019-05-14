<template>
  <div class="containt">
  	<Header :curretIndex="index" @openMark="showMark"/>
   <Banner/>
    <div class="connect">
		<img src="../assets/images/designer/connect.png" class="d-block w-100">
	</div>
   <div class="title">
   	<span class="leb">01/</span><span>产品设计</span>
   </div>
   <p class="intro">流程介绍：您可以根据您的想法提供设计稿，而我们则负责实现您的想法</p>
   <div class="floor">
   	<div class="floorleft">
      <a href="javascript:;">
        <img src="../assets/images/designer/1.png" class="d-block w-100">
        <div class="designerMark">
          <div class="detail">
            <p>木纹地板设计</p>
            <p>Wood flooring design</p>
          </div>
        </div>
      </a>	
   	</div>
   	<div class="floorright">
   		<div class="floortop">
   			<div class="floortopleft">
          <a href="javascript:;">
   				<img src="../assets/images/designer/2.png" class="d-block w-100">
           <div class="designerMark">
          <div class="detail">
            <p>木纹地板设计</p>
            <p>Wood flooring design</p>
          </div>
        </div>
      </a>  
   			</div>
   			<div class="floortopright">
           <a href="javascript:;">
   				<img src="../assets/images/designer/3.png" class="d-block w-100">
           <div class="designerMark">
          <div class="detail">
            <p>木纹地板设计</p>
            <p>Wood flooring design</p>
          </div>
        </div>
      </a>  
   			</div>
   		</div>
   		<div class="floortop">
   			<div class="floortopleft">
          <a href="javascript:;">
   				<img src="../assets/images/designer/4.png" class="d-block w-100">
           <div class="designerMark">
          <div class="detail">
            <p>木纹地板设计</p>
            <p>Wood flooring design</p>
          </div>
        </div>
      </a>  
   			</div>
   			<div class="floortopright">
          <a href="javascript:;">
   				<img src="../assets/images/designer/5.png" class="d-block w-100">
           <div class="designerMark">
          <div class="detail">
            <p>木纹地板设计</p>
            <p>Wood flooring design</p>
          </div>
        </div>
      </a>  
   			</div>
   		</div>	
   	</div>
   </div>
   <!-- 装饰设计 -->
   <div class="title2" @click="jump">
   	<span class="leb">02/</span><span>装饰设计</span>
   </div>
   <ul class="cart" @click="jump">
   	<li>三室一厅</li>
   	<li>两室一厅</li>
   	<li>一室独居</li>
   	<li>公司装修</li>
   	<li>其他类型</li>
   </ul>
	<div class="cartImg" @click="jump">
		<img src="../assets/images/designer/cartImg.png" class="d-block w-100">
	</div>
	<div class="title margBot">
   	<span class="leb">03/</span><span>金牌设计师</span>
   </div>
    <div class="floor3">

		<div class="cardList" v-for="(item,index) in ListData" :index='index' @mouseenter.self="mouseEnter(index)" :class ="select == index ? 'selectItem':''">
			<span class="lin1"></span>
			<div class="case">
			<div class="avator">
				<img class="card-img-top" src="../assets/images/designer/avator.png" alt="Card image cap">
			</div>
			<div class="card-body">
				<h5 class="card-title">张三</h5>
				<p class="card-text">性别:男 年龄:26</p>
				<p class="card-text">毕业于四川美术学院室内设计系， 之前工作过三家装修公司。具有丰富的 设计经验，对于装修和设计有自己独特的眼光和 技巧。为人平和</p>
				<a href="#/productlist" class="btn styBtn">点击查看作品>></a>
			</div>
			</div>
			<span class="lin2"></span>
		</div>

   </div> 
   <Footer/>
    <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Banner from "@/components/public/banner";
import Footer from "@/components/public/footer";
import erCode from '@/components/public/erCode'
export default {
  components:{Header, Banner,Footer,erCode},
  name: 'Designer',
  data () {
    return {
     index:6,
	 select:1,
	 ListData:[
		 {name:'张三',sex:'男',age:'17',info:'毕业于四川美术学院室内设计系， 之前工作过三家装修公司。具有丰富的 设计经验，对于装修和设计有自己独特的眼光和 技巧。为人平和'},
		 {name:'张三',sex:'男',age:'17',info:'毕业于四川美术学院室内设计系， 之前工作过三家装修公司。具有丰富的 设计经验，对于装修和设计有自己独特的眼光和 技巧。为人平和'},
		 {name:'张三',sex:'男',age:'17',info:'毕业于四川美术学院室内设计系， 之前工作过三家装修公司。具有丰富的 设计经验，对于装修和设计有自己独特的眼光和 技巧。为人平和'}
	 ]
    }
  },
  methods:{
   mouseleave(){},
   menu() {
    this.isScroll = window.scrollY>0;
  },
  mouseEnter(index){
  	this.select = index
  },
    jump(){
      this.$router.push({
        path:`/productMore`
      })
    },
     showMark(){
       this.$refs.erCode.openMark();
    }
},
   mounted(){

  }
}
</script>
<style scoped lang="less">
h1,h2{font-weight: bold;}
 .margBot{margin-bottom: 5rem;}
 .marginTop{
	margin-top: 30px;
 } 
 .title{
 	text-align: center;
  span.leb{
 		display: inline-block;
 		color:#C5C5C5;
    font-size: 72px;
    font-family: SimHei;
 	}
 	span{
 		display: inline-block;
    font-size: 48px;
    font-weight:bold;
    vertical-align: middle;
 	}
 }
 .title2{
 	background: #AECEC4;
  text-align: center;
 	padding: 58px 0 40px 0;
 	box-sizing: border-box;
 	span.leb{
 		display: inline-block;
 		color:#C5C5C5;
    font-size: 72px;
    font-family: SimHei;
 	}
 	span{
 		display: inline-block;
 		color:#fff;
    font-size: 48px;
    font-weight:bold;
    vertical-align: middle;
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
  li:hover{color:#0e887a;}
 	.select{
		color:#1B8D80;
 	}
 }
 .cartImg{
 	width: 100%;
 margin-bottom: 200px;
 }
 .connect{
  width: 100%;
  margin: 80px 0 120px 0;
 }
 .intro{
	font-size: 20px;
  font-weight:bold;
  margin-bottom:86px; 

 }
 .floor{
 	width: 90%;
 	margin: 0 auto 200px auto;
 	display: flex;
 	justify-content: space-around;
 	.floorleft{
 		width: 32%;
    a{
      position: relative;
      display: inline-block;
      .designerMark{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        background: rgba(174,206,196, 0.7);
        opacity: 0;
        transition:all 0.3s;
        .detail{
          color:#fff;
          font-size: 24px;
          font-weight: bold;
          position: absolute;
          bottom: 20%;
          width: 100%;
          text-align: center;
        }
      }
    }
    a:hover .designerMark{
     opacity: 1;
   }
 	} 
 	.floorright{
 		width:67.5%;
 		display: flex;
 		flex-direction:column;
 		justify-content: space-between; 
 		.floortop{
 			display: flex;
 			justify-content: space-between;
 			.floortopleft,.floortopright{
 				width: 49.8%;
        position: relative;
        a{
          position: relative;
          display: inline-block;
          .designerMark{
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left: 0;
            background: rgba(174,206,196, 0.7);
            opacity: 0;
            transition:all 0.3s;
            .detail{
              color:#fff;
              font-size: 24px;
              font-weight: bold;
              position: absolute;
              bottom: 20%;
              width: 100%;
              text-align: center;
            }
          }
        }
        a:hover .designerMark{
         opacity: 1;
       }

 			}
 		}
 	}
 }
 .floor3{
 	width: 72%;
	 margin:0 auto 200px auto;
 	display: flex;
	justify-content: space-between;
	transition: all 0.5s;
 	.cardList{
		 /*width: 32%;*/
		padding-top: 2rem;
		padding-bottom: 5rem;
 		background: #DADBDB;
 		box-sizing: border-box;
 		.avator{
 			width: 100px;
 			height: 100px;
 			margin: 20px auto;
 		}
 	}
 }
 .floor3 .cardList .card-body{padding: 1rem 2.5rem;}
 .floor3 .cardList:nth-child(1){background: -webkit-linear-gradient(left,#fff,#DADBDB);}
 .floor3 .cardList:nth-child(3){background: -webkit-linear-gradient(right,#fff,#DADBDB);}
 .floor3 .selectItem{position: relative;background: #fff!important;}
 .floor3 .styBtn{border:1px solid #0d7569;color: #0d7569;font-size: .9rem;opacity: 0;transition: all 0.5s;}
 .floor3 .lin1{transition: all 0.5s;}
 .floor3 .lin2{transition: all 0.5s;}
 .floor3 .case{transition: all 0.2s;}
 .selectItem .lin1{position: absolute;left:0;top:-2rem;background: #0d7569;display: block;height: .4rem;width: 100%;}
 .selectItem .lin2{position: absolute;left:0;bottom:-2rem;background: #0d7569;display: block;height: .4rem;width: 100%;}
 .selectItem .case{transform: translate3d(0,2rem,0);}
.selectItem .styBtn{opacity: 1;}

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
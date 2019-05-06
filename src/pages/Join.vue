<template>
  <div class="containt">
   <Header :curretIndex="index" :isScroll='isScroll'/>
   <div class="join">
   	<div class="bcg">
   	   <img src="../assets/images/Join/joinbcg.png" class="d-block w-100" >
   	</div>
   	<div class="ipt">
   	   <div>
   	   	<input type="text" name="" placeholder="title">
   	   </div>
   	   <div>
   	   	<textarea></textarea>
   	   </div>
   	   <div>
   	   	<input type="email" name="" placeholder="email">
   	   </div>
   	   <div class="subBtn">submit</div>
   	</div>
   </div>
   <div class="joinConent">
   	<img src="../assets/images/Join/joinconent.png" class="d-block w-100" >
   </div>
   <Footer/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
export default {
  components:{Header,Footer},
  name: 'Join',
  data () {
    return {
     index:8,
     isScroll:false,
    }
  },
   methods:{
   menu() {
    this.isScroll = window.scrollY>0;
  }
  },
   mounted(){
    window.addEventListener('scroll', this.menu)
  }
}
</script>
<style scoped lang="less">
.join{
	position: relative;
	.ipt{
		position:absolute;
		width: 43.8%;
		top: 20%;
		left: 10%;
		div{
			margin-bottom: 16px;
			input{
				width: 100%;
				height: 30px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0;
			}
			textarea{
				width: 100%;
				height:133px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0; 
			}

		}
		.subBtn{
			width: 130px;
			height: 42px;
			line-height: 42px;
			background: #0E887A;
			color: #fff;
			float: right;
		}
	}

}
.joinConent{
	width: 80%;
	margin: 268px auto 312px;
}
@media (max-width: 767px) { 
.join{
	position: relative;
	.ipt{
		position:absolute;
		width: 43.8%;
		top: 25%;
		left: 10%;
		div{
			margin-bottom: 6px;
			input{
				width: 100%;
				height: 25px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0;
			}
			textarea{
				width: 100%;
				height:43px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0; 
			}

		}
		.subBtn{
			width: 80px;
			height: 30px;
			line-height: 30px;
			background: #0E887A;
			color: #fff;
			float: right;
		}
	}

}	
.joinConent{
	width: 80%;
	margin: 70px auto 112px;
}
}
</style>
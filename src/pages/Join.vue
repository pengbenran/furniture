<template>
  <div class="containt">
   <Header :curretIndex="index"/>
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
     index:7,
    }
  },
   methods:{

  },
   mounted(){
    
  }
}
</script>
<style scoped lang="less">
.join{
	position: relative;
	.ipt{
		position:absolute;
		width: 43.8%;
		top: 28%;
		left: 8%;
		div{
			margin-bottom: 32px;
			input{
				width: 100%;
				height: 60px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0;
			}
			textarea{
				width: 100%;
				height:266px;
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
@media (max-width: 1024px) { 
.join{
	position: relative;
	.ipt{
		position:absolute;
		width: 43.8%;
		top: 28%;
		left: 8%;
		div{
			margin-bottom: 16px;
			input{
				width: 100%;
				height: 40px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0;
			}
			textarea{
				width: 100%;
				height:120px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0; 
			}

		}
		.subBtn{
			width: 130px;
			height: 50px;
			line-height: 50px;
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
@media (max-width: 767px) { 
.join{
	position: relative;
	.ipt{
		position:absolute;
		width: 43.8%;
		top: 30%;
		left: 10%;
		div{
			margin-bottom: 4px;
			input{
				width: 100%;
				height: 20px;
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
			height: 25px;
			line-height: 25px;
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
<template>
  <div class="containt">
   <Header :curretIndex="index" @openMark="showMark"/>
   <div class="join">
   	<div class="bcg">
   	   <img src="../assets/images/Join/joinbcg.png" class="d-block w-100" >
   	</div>
   	<div class="ipt">
   	   <div>
   	   	<input type="text" v-model="emailData.title" name="" placeholder="标题">
   	   </div>
   	   <div>
   	   	<textarea v-model="emailData.concent"  placeholder="内容"></textarea>
   	   </div>
   	   <div>
   	   	<input type="email" v-model="emailData.email" name="" placeholder="电子邮箱">
   	   </div>
   	   <div>
   	   	<input type="phone" v-model="emailData.phone" name="" placeholder="电话号码">
   	   </div>
   	   <button class="subBtn" @click="PostEmail()">submit</button>
   	</div>
   </div>
   <div class="joinConent">
   	<img src="../assets/images/Join/joinconent.png" class="d-block w-100" >
   </div>
   <Footer/>
   <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import erCode from '@/components/public/erCode';
import Api from '@/Api/join'

export default {
  components:{Header,Footer,erCode},
  name: 'Join',
  data () {
    return {
	 index:7,
	 emailData:{

	 }
    }
  },
   methods:{
	   maasdas(){
		   console.log("qweqweqwew")
	   },
	showMark(){
	   this.$refs.erCode.openMark();
	},
	PostEmail(){
	   let that = this;
	   Api.JoinPostEmail(that.emailData).then(res => {
           alert('发送成功')
	   }).catch(err => {
		   alert('网络错误，请重试')
	   })
	}
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
		top: 20%;
		left: 8%;
		div{
			margin-bottom: 20px;
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
			margin-left:84.2%; 
			border: none;
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
		position:relative!important;
		width: 100%!important;
		padding: 1rem!important;
		// top: 28%;
		left: 0!important;
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
			margin: 20px auto 0 auto;
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
				height: 40px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0;
			}
			textarea{
				width: 100%;
				height:90px;
				background: #F3F5F6;
				padding-left: 10px;
				box-sizing: border-box;
				border: none;
				outline: 0; 
			}

		}
		.subBtn{
			width: 80px;
			height: 40px;
			line-height: 40px;
			background: #0E887A;
			color: #fff;
			
		}
	}

}	
.joinConent{
	width: 80%;
	margin: 70px auto 112px;
}
}
</style>
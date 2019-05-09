<template>
  <div class="containt mobileNew">
  	<!-- 导航栏 -->
  	<Header :curretIndex="index"/>
  	<!-- banner图 -->
   <Banner/>
   <!-- 公司新闻 -->
   <div class="title">
   	公司新闻
   </div>
   <div class="companyNew ">
   	<div class="companyNewLeft">
   		<img src="../assets/images/newsCenter/companynew.png" class="d-block w-100" >
   	</div>
   	<div class="companyNewRight">
   		<div class="companyNewRightList"  @click="to">
   			<div class="date">
   				<p class="day">13</p>
   				<p class="mont">2018-04</p>
   			</div>
   			<div class="intro">
   				<div class="newTitle">空间十分深刻发货</div>
   				<div class="newsDetail">三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
				三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
   				</div>
   			</div>
   		</div>
   		<div class="companyNewRightList" @click="to">
   			<div class="date">
   				<p class="day">13</p>
   				<p class="mont">2018-04</p>
   			</div>
   			<div class="intro">
   				<div class="newTitle">空间十分深刻发货</div>
   				<div class="newsDetail">三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
				三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
   				</div>
   			</div>
   		</div>
   		<div class="companyNewRightList"  @click="to">
   			<div class="date">
   				<p class="day">13</p>
   				<p class="mont">2018-04</p>
   			</div>
   			<div class="intro">
   				<div class="newTitle">空间十分深刻发货</div>
   				<div class="newsDetail">三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
				三点后分为离开合肥市是是地方就送非师范手动阀ISO放假是粉丝哦积分水电费是否是的覅偶
   				</div>
   			</div>
   		</div>
   	</div>
   </div>
   <div class="industry">
   	 <div class="industryTitle">
   	 	行业新闻
   	 </div>
   	 <div class="engTitle">
   	 	industry &nbsp; news
   	 </div>
   	 <div class="industryConent">
   	 	<div class="left" @click="to">
			<a href="javasrcipt:;">
			    <img src="../assets/images/newsCenter/industry1.png" class="d-block w-100" >
				<div class="Mask">
					<div class="MaskInfo">
						<p>宜家新出了这些家具你还不知道吗？</p>
						<span>了解更多》</span>
					</div>
				</div>
			</a>
   	 	</div>
   	 	<div class="right">
   	 		<div class="top">
   	 			<div class="imglist" @click="to">
					<router-link  to='/newsInfo' >
						<img src="../assets/images/newsCenter/industry3.png" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>宜家新出了这些家具你还不知道吗？</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</router-link>
   	 			</div>
   	 			<div class="imglist" @click="to">
					<router-link  to='/newsInfo' >
						<img src="../assets/images/newsCenter/industry4.png" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>宜家新出了这些家具你还不知道吗？</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</router-link>
   	 			</div>
   	 			<div class="imglist">
					<router-link  to='/newsInfo' >
						<img src="../assets/images/newsCenter/industry5.png" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>宜家新出了这些家具你还不知道吗？</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</router-link>
   	 			</div>
   	 		</div>
   	 		<div class="bottom">
   	 			<div class="imglist" @click="to">
					<router-link  to='/newsInfo' >
						<img src="../assets/images/newsCenter/industry2.png" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>宜家新出了这些家具你还不知道吗？</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</router-link>
   	 			</div>
   	 			<div class="imglist" @click="to">
					<router-link  to='/newsInfo' >
						<img src="../assets/images/newsCenter/industry6.png" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>宜家新出了这些家具你还不知道吗？</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</router-link>
   	 			</div>
   	 		</div>
   	 	</div>
   	 </div>
   </div>
   <!-- 页面底部 -->
   <Footer/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
export default {
  components:{Header,Banner,Footer},
  name: 'newsCenter',
  data () {
    return {
     index:2,
    }
  },
	methods: {
		to(){
			this.$router.push({
				path:`/newsInfo`
			})
		},
	},
	 mounted(){
   
  }
}
</script>
<style scoped lang="less">
.title{
	font-size: 48px;
	font-weight: bold;
	margin-top: 200px;
}
.companyNew{
	width: 86.4%;
	margin: 113px auto;
	display: flex;
	justify-content: space-between;
	.companyNewLeft{
	   width: 45.5%;
	}
	.companyNewRight{
		width: 51.5%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.companyNewRightList{
			display: flex;
			background: #EAEAEA;
			.date{display: flex;flex-direction: column;justify-content:center;
				p{margin-bottom: 0;}
				.day{
					font-size:48px;
					width: 100px;
				}
				.mont{
					font-size: 18px;
				}
			}
			.intro{
				padding: 1rem 0;
				text-align: left;
				.newTitle{
					font-size:18px;
					font-weight: bold;
					height: 50px;
					line-height: 50px;
				}
				.newsDetail{
					font-size:16px;
					padding-right: 20px;
					box-sizing: border-box;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
		}
	}
	.companyNewRight :hover{
		color: #fff;
		background: #AECEC4;
	}
}
.industry{
	background-image: url('../assets/images/newsCenter/industrybcg.png');
	color:#fff;
	padding-top: 80px;
	padding-bottom: 20px;
	box-sizing: border-box;
	.industryTitle{
		font-size: 36px;	
	}
	.engTitle{
		font-size: 24px;
		margin-bottom: 152px
	}
	.industryConent{
		width: 78%;
		margin:auto;
		display: flex;
		justify-content: space-between;
		a{display: inline-block;position: relative;color: #fff;}
		a .Mask{background: rgba(14, 136, 122, 0.3);position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: flex;align-items: center;opacity: 0;transition: all 0.3s;}
		a .MaskInfo{width: 100%;text-align: left;padding: 0 10%;}
		a .Mask p{font-size: 1.1rem;}
		a .Mask span{border:1px solid #fff;font-size: .9rem;display: inline-block;padding: .2rem 1rem;}
		a:hover .Mask{opacity: 1;}
		.left{
			width: 23%;
			height:100%;
		}
		.right{
			width: 76.8%;
			display:flex;
			flex-direction: column;
			justify-content: space-between;
			.top{
				display: flex;
				justify-content: space-around;
				.imglist{
					width: 33%;
					position: relative;
					.mode{
						width: 100%;
						height: 100%;
						background: red;
						top: 0;
						left: 0;
						position: absolute;
						display:none
					}
				}
				
			}
			.bottom{
				display: flex;
				justify-content: space-around;
			}

		}
	}
}


@media (max-width: 768px) { 
	.title{margin-top: 50px;}
	.companyNew{
		width: 86.4%;
		margin: 50px auto;
		flex-wrap:wrap;
		.companyNewLeft{
			width: 100%;
		}
		.companyNewRight{
			width: 100%;
			margin-top: 20px;
			.companyNewRightList{
				margin-bottom: 10px;
			}
		}
	}
	.industry{
		padding-bottom: 40px;
		.engTitle{
			font-size: 24px;
			margin-bottom: 74px
		}
	}
}
</style>
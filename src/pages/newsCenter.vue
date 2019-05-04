<template>
  <div class="containt">
  	<!-- 导航栏 -->
  	<Header/>
  	<!-- banner图 -->
   <Banner/>
   <!-- 公司新闻 -->
   <div class="title">
   	公司新闻
   </div>
   <div class="companyNew">
   	<div class="companyNewLeft">
   		<img src="static/images/newsCenter/companynew.png" class="d-block w-100" >
   	</div>
   	<div class="companyNewRight">
   		<div class="companyNewRightList">
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
   		<div class="companyNewRightList">
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
   		<div class="companyNewRightList">
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
     
    }
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
			.date{
				.day{
					font-size:48px;
					width: 100px;
				}
				.mont{
					font-size: 18px;
				}
			}
			.intro{
				text-align: left;
				.newTitle{
					font-size:18px;
					font-weight: bold;
					height: 70px;
					line-height: 70px;
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
</style>
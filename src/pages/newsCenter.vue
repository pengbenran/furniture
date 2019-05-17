<template>
  <div class="containt mobileNew">
  	<!-- 导航栏 -->
  	<Header :curretIndex="index" @openMark="showMark"/>
  	<!-- banner图 -->
   <Banner ref='banner'/>
   <!-- 公司新闻 -->
   <div class="title scroll opacity"  data-animation="fadeInRight">
   	公司新闻
   </div>
   <div class="subTitle scroll opacity"  data-animation="fadeInLeft"><img src="../assets/images/newsCenter/companyIcon.png"></div>
   <div class="companyNew ">
   	<div class="companyNewLeft scroll opacity"  data-animation="fadeInLeft">
   		<img src="../assets/images/newsCenter/companynew.png" class="d-block w-100" >
   	</div>
   	<div class="companyNewRight scroll opacity"  data-animation="fadeInDown">
   		<div class="companyNewRightList"  @click="to(item.id)" v-for="(item,index) in companyNewList" >
   			<div class="date">
   				<p class="day">{{item.createDay}}</p>
   				<p class="mont">{{item.createMonth}}</p>
   			</div>
   			<div class="intro">
   				<div class="newTitle">{{item.title}}</div>
   				<div class="newsDetail">
   					{{item.intro}}
   				</div>
   			</div>
   		</div>
   	</div>
   </div>
   <div class="industry">
   	 <div class="industryTitle scroll opacity"  data-animation="zoomIn">
   	 	行业新闻
   	 </div>
   	 <div class="engTitle scroll opacity"  data-animation="zoomIn">
   	 	INDUSTRY &nbsp; NEWS
   	 </div>
   	 <div class="industryConent">
   	 	<div class="left scroll opacity"  data-animation="fadeInLeft" @click="to(industryNewsList[0].id)">
			<a href="javasrcipt:;">
			    <img :src="industryNewsList[0].back_img" class="d-block w-100" >
				<div class="Mask">
					<div class="MaskInfo">
						<p>{{industryNewsList[0].title}}</p>
						<span>了解更多》</span>
					</div>
				</div>
			</a>
   	 	</div>
   	 	<div class="right">
   	 		<div class="top scroll opacity"  data-animation="fadeInRight">
   	 			<div class="imglist" @click="to(industryNewsList[1].id)">
   	 				<a href="javasrcipt:;">
						<img :src="industryNewsList[1].back_img" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>{{industryNewsList[1].title}}</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</a>
   	 			</div>
   	 			<div class="imglist" @click="to(industryNewsList[2].id)">
   	 				<a href="javasrcipt:;">
						<img :src="industryNewsList[2].back_img" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>{{industryNewsList[2].title}}</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</a>
   	 			</div>
   	 			<div class="imglist" @click="to(industryNewsList[3].id)">
					<a href="javasrcipt:;">
						<img :src="industryNewsList[3].back_img" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>{{industryNewsList[3].title}}</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</a>
   	 			</div>
   	 		</div>
   	 		<div class="bottom scroll opacity"  data-animation="fadeInDown">
   	 			<div class="imglist" @click="to(industryNewsList[4].id)">
   	 				<a href="javasrcipt:;">
					<img :src="industryNewsList[4].back_img" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>{{industryNewsList[4].title}}</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</a>
   	 			</div>
   	 			<div class="imglist"@click="to(industryNewsList[5].id)">
   	 				<a href="javasrcipt:;">
						<img :src="industryNewsList[5].back_img" class="d-block w-100" >
						<div class="Mask">
							<div class="MaskInfo">
								<p>{{industryNewsList[5].title}}</p>
								<span>了解更多》</span>
							</div>
					    </div>
					</a>
   	 			</div>
   	 		</div>
   	 	</div>
   	 </div>
   </div>
   <!-- 页面底部 -->
   <Footer/>
   <erCode ref="erCode"/>
  </div>
</template>
<script>
import Header from "@/components/public/nav";
import Footer from "@/components/public/footer";
import Banner from "@/components/public/banner";
import scroll from '../assets/js/scroll.js'
import erCode from '@/components/public/erCode'
import Api from '@/Api/news'
export default {
  components:{Header,Banner,Footer,erCode},
  name: 'newsCenter',
  data () {
    return {
     index:2,
     companyNewList:[],
     industryNewsList:[{title:''},{title:''},{title:''},{title:''},{title:''},{title:''}]
    }
  },
	methods: {
		to(id){
			this.$router.push({
				path:`/newsInfo?id=${id}`
			})
		},
		showMark(){
			this.$refs.erCode.openMark();
		},
		// 获取公司新闻列表
		getCompanyList(){
			let params={}
			params.key=''
			let that=this
			params.pageIndex=1
			params.pageSize=3
			params.style=1
			Api.CompanyList(params).then(function(res){
				res.map(item=>{
					let createDate=item.createTime.split(' ')[0]
					console.log(createDate)
					item.createDay=createDate.split('-')[2]
					item.createMonth=createDate.split('-')[0]+'-'+createDate.split('-')[1]
					return item
				})
				that.companyNewList=res

			})
		},
		// 获取行业新闻列表
		getindustryNewsList(){
			let params={}
			params.key=''
			let that=this
			params.pageIndex=1
			params.pageSize=6
			params.style=2
			Api.CompanyList(params).then(function(res){
				// console.log(res);
				that.industryNewsList=res
				console.log('that.industryNewsList',that.industryNewsList)
			})
		}
	},
	 mounted(){
    window.addEventListener('scroll', scroll.handleScroll)
     this.$refs.banner.getBannerList()
     this.getCompanyList()
     this.getindustryNewsList()
  }
}
</script>
<style scoped lang="less">
.title{
	font-size: 48px;
	font-weight: bold;
	margin-top: 200px;
	font-family: STFangsong;
}
.companyNew{
	width: 86.4%;
	margin: 113px auto 270px auto;
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
	padding-bottom: 205px;
	box-sizing: border-box;
	.industryTitle{
		font-size: 48px;	
	}
	.engTitle{
		font-size: 24px;
		margin-bottom: 152px;
		font-weight: bold;
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
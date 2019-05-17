import * as API from './'
export default {
	// 获取公司新闻列表
	CompanyList:params=>{
		return API.GET('/project/center/newsListByStyle',params)
	},
	// 获取新闻详情
	newsDetail:params=>{
		return API.GET('/project/center/news',params)
	}
}
import * as API from './'

export default {
	// 获取设计师列表
	getDesignerList:params=>{
		return API.GET('/project/product/designer/queryList',params)
	},
	// 获取装饰设计列表
	getDecorateList:params=>{
		return API.GET('/project/design/adorn/queryList',params)
	},
	// 获取产品列表
	getProductList:params=>{
		return API.GET('/project/design/product/queryList',params)
	}
}
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
	},
	// 根据设计师id查询设计师作品
	getDecorateDetail:params=>{
		return API.GET('/project/product/designer',params)
	},
	// 获取产品设计详情
	getProductDetail:params=>{
		return API.GET('/project/design/product',params)
	}
}
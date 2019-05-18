import * as API from './'

export default {
	// 获取商品详情
	getGoodDetail:params=>{
		return API.GET('/project/product/info',params)
	},

	//获取指定分类商品
	GetGoodCat:params => {
		return API.GET('/project/product/listbyItem',params)
	},

	//根据标签分类获取商品
	GetCatLab:params => {
		return API.GET('/project/product/listbyItemLabel',params)
	},

	//获取指定热销的产品
	GetLabGoods:params => {
		return API.GET('/project/product/listbyLabel',params)
	}

}
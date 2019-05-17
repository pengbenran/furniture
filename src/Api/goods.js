import * as API from './'

export default {
	// 获取商品详情
	getGoodDetail:params=>{
		return API.GET('/project/product/info',params)
	}
}
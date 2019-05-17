import * as API from './'

export default {
	// 获取首页根分类
	getRootList:params=>{
		return API.GET('/project/product/getRootItems',params)
	},
	// 获取所有分类
	getallKindList:()=>{
		return API.GET('/project/product/itemList')
	},
	// 根据父id获取子分类
	getItemsByParentId:params=>{
		return API.GET('/project/product/getItemsByParentId',params)
	},
	// 获取分类下的所有商品
	listbyItem:params=>{
		return API.GET('/project/product/listbyItem',params)
	},
	// 获取所有标签
	getLabelList:params=>{
		return API.GET('/project/labelList',params)
	},
	// 根据标签获取标签下的商品
	getListbyLabel:params=>{
		return API.GET('/project/product/listbyLabel',params)
	}

}
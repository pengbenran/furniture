import * as API from './'

export default {
	// 提交邮件
	JoinPostEmail:params=>{
		return API.POST('/project/email/sendMsg',params)
	}
}
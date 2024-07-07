const LabelService = require("../service/label.service")

async function labelIsExit(ctx, next) {
	let id
	if (ctx.request.body.id) {
		id = ctx.request.body.id
	} else if (ctx.request.params.id) {
		id = ctx.request.params.id
	}

	// TODO: 标签是否存在
	const labelList = await LabelService.getLabelById(id)
	if (labelList?.length === 0) {
		ctx.status = 400
		ctx.body = {
			code: 400,
			message: "标签不存在",
		}
	} else {
		await next()
	}
}
async function isSameLabel(ctx, next) {
	const { name } = ctx.request.body
	const labelList = await LabelService.getSameLabel(name)


	if (labelList?.length !== 0) {
		ctx.status = 400
		ctx.body = {
			code: 400,
			message: "标签已存在",
		}
	} else {
		await next()
	}
}



module.exports = {
	labelIsExit,
	isSameLabel
}
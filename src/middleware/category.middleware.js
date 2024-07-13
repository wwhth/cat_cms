const CategoryService = require("../service/category.service")

async function categoryIsExit(ctx, next) {
	let id
	if (ctx.request.body.id) {
		id = ctx.request.body.id
	} else if (ctx.request.params.id) {
		id = ctx.request.params.id
	}

	// TODO: 类别是否存在
	const categoryList = await CategoryService.getCategoryById(id)
	if (categoryList?.length === 0) {
		ctx.status = 400
		ctx.body = {
			code: 400,
			message: "类别不存在",
		}
	} else {
		await next()
	}
}

async function isSameCategory(ctx, next) {
	const { name } = ctx.request.body
	const categoryList = await CategoryService.getSameCategory(name)


	if (categoryList?.length !== 0) {
		ctx.status = 400
		ctx.body = {
			code: 400,
			message: "类别已存在",
		}
	} else {
		await next()
	}
}



module.exports = {
	categoryIsExit,
	isSameCategory
}
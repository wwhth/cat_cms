const CategoryService = require("../service/category.service");
class categoryController {
	async getAll(ctx) {
		const categoryList = await CategoryService.getAll();
		console.log("🚀 ~ CategoryService ~ getAll ~ categoryList:", categoryList)
		ctx.body = {
			code: 200,
			message: "获取成功",
			data: categoryList,
		};
	}
	async create(ctx) {
		const { name } = ctx.request.body;
		const result = await CategoryService.createCategory(name);
		ctx.status = result.code
		ctx.body = result
	}
	async update(ctx) {
		const { id, name } = ctx.request.body;
		const result = await CategoryService.updateCategory(id, name);
		console.log("🚀 ~ CategoryService ~ update ~ result:", result)
		ctx.status = result.code
		ctx.body = result
	}
	async delete(ctx) {
		const { id } = ctx.request.params;
		const result = await CategoryService.deleteCategory(id);
		ctx.status = result.code
		ctx.body = result
	}
}

module.exports = new categoryController();
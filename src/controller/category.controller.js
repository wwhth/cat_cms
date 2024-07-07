const CategoryService = require("../service/category.service");
class categoryController {
	async getAll(ctx) {
		const categoryList = await CategoryService.getAll();
		console.log("🚀 ~ labelController ~ getAll ~ labelList:", categoryList)
		ctx.body = {
			code: 200,
			message: "获取成功",
			data: categoryList,
		};
	}
}

module.exports = new categoryController();
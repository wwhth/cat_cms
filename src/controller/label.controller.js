const LabelService = require("../service/label.service");
class LabelController {
	async getAll(ctx) {
		const labelList = await LabelService.getAll();
		ctx.body = {
			code: 200,
			message: "获取成功",
			data: labelList,
		};
	}
	async create(ctx) {
		const { name, category_id } = ctx.request.body;
		const result = await LabelService.createLabel(name, category_id);
		ctx.status = result.code
		ctx.body = result
	}
	async update(ctx) {
		const { id, name, category_id } = ctx.request.body;
		const result = await LabelService.updateLabel(id, name, category_id);
		console.log("🚀 ~ labelController ~ update ~ result:", result)
		ctx.status = result.code
		ctx.body = result
	}
	async delete(ctx) {
		const { id } = ctx.request.params;
		const result = await LabelService.deleteLabel(id);
		ctx.status = result.code
		ctx.body = result
	}

}

module.exports = new LabelController();

const articleService = require("../service/article.service");
class ArticleController {
	async getAll(ctx) {
		const articleList = await articleService.getAll();
		console.log("🚀 ~ articleController ~ getAll ~ articleList:", articleList)
		ctx.body = {
			code: 200,
			message: "获取成功",
			data: articleList,
		};
	}
	async getArticleById(ctx) { }
	async createArticle(ctx) {
		const result = await articleService.createArticle(ctx.request.body);
		console.log("🚀 ~ ArticleController ~ createArticle ~ result:", result)

		ctx.body = result
	}
	async deleteArticle(ctx) {

		const result = await articleService.deleteArticle(ctx.request.params.id);
		ctx.body = result
	}
	async updateArticle(ctx) {

		const result = await articleService.updateArticle(ctx.request.body);
		ctx.body = result
	}
	async searchArticle(ctx) { }
}

module.exports = new ArticleController();
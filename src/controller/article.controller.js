
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
	async createArticle(ctx) { }
	async deleteArticle(ctx) { }
	async updateArticle(ctx) { }
	async searchArticle(ctx) { }
}

module.exports = new ArticleController();
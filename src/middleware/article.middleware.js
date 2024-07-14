const articleService = require("../service/article.service");

async function verifyArticleExist(ctx, next) {
	console.log(ctx.params, ctx.body, ctx.request, ctx.query, ctx.request.params)
	const id = ctx.params?.id || ctx.request.body?.id;
	const article = await articleService.getArticleById(id);
	console.log("🚀 ~ verifyArticleExist ~ article:", article)
	if (article.length === 0) {
		return ctx.app.emit("error", {
			status: 500,
			message: "文章不存在"
		}, ctx);
	}
	ctx.article = article;
	await next();
}

module.exports = {
	verifyArticleExist
}
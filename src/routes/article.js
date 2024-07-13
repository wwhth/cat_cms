const KoaRouter = require("@koa/router");
const articleController = require("../controller/article.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const articleRouter = new KoaRouter({
	prefix: "/api/v1/article",
});

articleRouter.get('/', verifyAuth, articleController.getAll)
articleRouter.get("/get/:id", verifyAuth, articleController.getArticleById);
articleRouter.post("/create", verifyAuth, articleController.createArticle);
articleRouter.get("/delete/:id", verifyAuth, articleController.deleteArticle);
articleRouter.post("/update", verifyAuth, articleController.updateArticle);
articleRouter.get("/search", verifyAuth, articleController.searchArticle);

module.exports = articleRouter;

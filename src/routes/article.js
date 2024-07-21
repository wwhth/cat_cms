const KoaRouter = require("@koa/router");
const articleController = require("../controller/article.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const { verifyArticleExist } = require("../middleware/article.middleware")
const articleRouter = new KoaRouter({
	prefix: "/api/v1/article",
});

articleRouter.get('/', verifyAuth, articleController.getAll)
articleRouter.get("/get/:id", verifyAuth, articleController.getArticleById); // todo
articleRouter.post("/create", articleController.createArticle);
articleRouter.get("/delete/:id", verifyArticleExist, articleController.deleteArticle);
articleRouter.post("/update", verifyArticleExist, articleController.updateArticle);
articleRouter.get("/search", verifyAuth, articleController.searchArticle); // todo

module.exports = articleRouter;

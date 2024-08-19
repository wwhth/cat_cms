const KoaRouter = require("@koa/router");
const articleController = require("../controller/article.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const { verifyArticleExist } = require("../middleware/article.middleware")
const articleRouter = new KoaRouter({
	prefix: "/api/v1/article",
});

articleRouter.get('/', articleController.getAll)
articleRouter.get("/:id", articleController.getArticleById);
articleRouter.post("/create", articleController.createArticle);
articleRouter.get("/delete/:id", verifyArticleExist, articleController.deleteArticle);
articleRouter.post("/update", verifyArticleExist, articleController.updateArticle);
articleRouter.get("/search", articleController.searchArticle); // todo
articleRouter.get("/label/:id", articleController.getArticleByLabelId);

module.exports = articleRouter;

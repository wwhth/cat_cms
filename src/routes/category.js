const KoaRouter = require("@koa/router");
const categoryController = require("../controller/category.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const { categoryIsExit, isSameCategory } = require("../middleware/category.middleware");
const categoryRouter = new KoaRouter({
	prefix: "/api/v1/category"
});

categoryRouter.get("/", categoryController.getAll);
categoryRouter.post("/create", verifyAuth, isSameCategory, categoryController.create);
categoryRouter.get("/delete/:id", verifyAuth, categoryIsExit, categoryController.delete);
categoryRouter.post("/update", verifyAuth, categoryIsExit, isSameCategory, categoryController.update);

module.exports = categoryRouter;

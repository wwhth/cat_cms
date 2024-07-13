const KoaRouter = require("@koa/router");
const categoryController = require("../controller/category.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const { categoryIsExit, isSameCategory } = require("../middleware/category.middleware");
const categoryRouter = new KoaRouter({
	prefix: "/api/v1/category"
});

categoryRouter.get("/", verifyAuth, categoryController.getAll);
categoryRouter.post("/create", isSameCategory, categoryController.create);
categoryRouter.get("/delete/:id", categoryIsExit, categoryController.delete);
categoryRouter.post("/update", categoryIsExit, isSameCategory, categoryController.update);

module.exports = categoryRouter;

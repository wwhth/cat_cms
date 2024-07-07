const KoaRouter = require("@koa/router");
const categoryController = require("../controller/category.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const categoryRouter = new KoaRouter({
	prefix: "/api/v1/category"
});

categoryRouter.get("/", categoryController.getAll);

module.exports = categoryRouter;

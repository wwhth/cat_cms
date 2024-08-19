const KoaRouter = require("@koa/router");
const labelController = require("../controller/label.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const { isSameLabel, labelIsExit } = require("../middleware/label.middleware");
const labelRouter = new KoaRouter({
	prefix: "/api/v1/label"
});

labelRouter.get("/", labelController.getAll);
labelRouter.post("/create", verifyAuth, isSameLabel, labelController.create);
labelRouter.get("/delete/:id", verifyAuth, labelIsExit, labelController.delete);
labelRouter.post("/update", verifyAuth, labelIsExit, isSameLabel, labelController.update);

module.exports = labelRouter;

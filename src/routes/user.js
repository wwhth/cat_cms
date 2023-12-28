const KoaRouter = require("@koa/router");
const userController = require("../controller/user");
const userRouter = new KoaRouter({
  prefix: "/api/v1/user"
});
userRouter.post("/register", userController.register);

module.exports = userRouter;

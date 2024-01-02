const KoaRouter = require("@koa/router");
const userController = require("../controller/user");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new KoaRouter({
  prefix: "/api/v1/user"
});
userRouter.post("/register", verifyUser, handlePassword, userController.register);

module.exports = userRouter;

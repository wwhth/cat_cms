const KoaRouter = require("@koa/router");
const { login } = require("../middleware/login.middleware");
const loginController = require("../controller/login.controller");
const { verifyAuth } = require("../middleware/user.middleware");
const loginRouter = new KoaRouter({
  prefix: "/api/v1/login"
});

loginRouter.post("/", login, loginController.loginAndToken);
loginRouter.post("/test", verifyAuth, (ctx) => {
  ctx.body = {
    status: 200,
    message: "test成功"
  }
});
module.exports = loginRouter;

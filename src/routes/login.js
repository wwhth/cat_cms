const KoaRouter = require("@koa/router");
const { login } = require("../middleware/login.middleware");
const loginController = require("../controller/login");
const loginRouter = new KoaRouter({
  prefix: "/api/v1/login"
});

loginRouter.post("/", login, loginController.loginAndToken);
module.exports = loginRouter;

const KoaRouter = require("@koa/router");
const jwt = require("jsonwebtoken");
const userController = require("../controller/user");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new KoaRouter({
  prefix: "/api/v1/user"
});
const secret = 'wuwuyueyuezhangyunzhizhangqingyiyangchundi'
userRouter.post("/register", verifyUser, handlePassword, userController.register);
userRouter.get("/setToken", (ctx) => {
  // 设置token
  const payload = {
    name: "lucy",
    id: 123,
  }
  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  ctx.body = {
    code: 200,
    message: "ok",
    data: token
  }
});
userRouter.get("/getToken", (ctx) => {
  // 获取token
  console.log(ctx.headers.authorization)
  const token = ctx.headers.authorization.replace("Bearer ", "");
  const payload = jwt.verify(token, secret);
  ctx.body = {
    code: 200,
    message: "ok",
    data: payload
  }
}
)
module.exports = userRouter;

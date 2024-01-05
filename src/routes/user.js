// const fs = require("node:fs");
// const path = require("node:path");
const KoaRouter = require("@koa/router");
// const jwt = require("jsonwebtoken");
const userController = require("../controller/user");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new KoaRouter({
  prefix: "/api/v1/user"
});
// 相对路径不好用，最好用绝对路径
// const privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/private.key"));
// const publicKey = fs.readFileSync(path.resolve(__dirname, "../keys/public.key"));
userRouter.post("/register", verifyUser, handlePassword, userController.register);
// userRouter.get("/setToken", (ctx) => {
//   // 设置token
//   const payload = {
//     name: "lucy",
//     id: 123
//   };
//   const token = jwt.sign(payload, privateKey, { expiresIn: "1h", algorithm: "RS256" });
//   ctx.body = {
//     code: 200,
//     message: "ok",
//     data: token
//   };
// });
// userRouter.get("/getToken", (ctx) => {
//   // 获取token
//   const token = ctx.headers.authorization.replace("Bearer ", "");
//   const payload = jwt.verify(token, publicKey, {
//     algorithms: ["RS256"]
//   });
//   ctx.body = {
//     code: 200,
//     message: "ok",
//     data: payload
//   };
// });
module.exports = userRouter;

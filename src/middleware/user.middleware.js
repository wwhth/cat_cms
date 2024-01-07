const jwt = require("jsonwebtoken");
const { publicKey } = require("../config/secret");
const userService = require("../service/user");
const md5password = require("../utils/md5password");
const verifyUser = async (ctx, next) => {
  if (!ctx.request.body.name || !ctx.request.body.password) {
    return ctx.app.emit(
      "error",
      {
        status: -1001,
        msg: "用户名或密码不能为空"
      },
      ctx
    );
  }
  const userList = await userService.getUserList(ctx.request.body);
  if (userList.length > 0) {
    return ctx.app.emit(
      "error",
      {
        status: -1002,
        msg: "用户已存在"
      },
      ctx
    );
  }
  await next();
};
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);

  await next();
};
const verifyAuth = async (ctx, next) => {
  // 判断用户是否登录
  console.log(ctx.headers.authorization)
  const token = ctx.headers.authorization.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, publicKey, {
      algorithms: ["RS256"]
    });
    console.log(payload)
    if (payload) {
      await next();
    } else {
      return ctx.app.emit('error', {
        status: -1003,
        msg: '无效token或者token已过期'
      }, ctx)
    }
  } catch (error) {
    return ctx.app.emit('error', {
      status: -1003,
      msg: '无效token或者token已过期'
    }, ctx)
  }


};
module.exports = {
  verifyUser,
  handlePassword,
  verifyAuth
};

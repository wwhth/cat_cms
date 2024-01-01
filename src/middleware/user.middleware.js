const userService = require("../service/user");
const verifyUser = async (ctx, next) => {
  if (!ctx.request.body.name || !ctx.request.body.password) {
    return ctx.app.emit("error", {
      status: -1001,
      msg: "用户名或密码不能为空"
    }, ctx);

  }
  const userList = await userService.login(ctx.request.body);
  if (userList.length > 0) {
    return ctx.app.emit("error", {
      status: -1002,
      msg: "用户已存在"
    }, ctx);

  }
  await next();
};

module.exports = {
  verifyUser
};

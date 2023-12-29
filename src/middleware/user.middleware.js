const userService = require("../service/user");
const verifyUser = async (ctx, next) => {
  if (!ctx.request.body.name || !ctx.request.body.password) {
    ctx.body = {
      code: -1001,
      msg: "用户名或密码不能为空"
    };
    return;
  }
  const userList = await userService.login(ctx.request.body);
  if (userList.length > 0) {
    ctx.body = {
      code: -1002,
      msg: "用户已存在"
    };
    return;
  }
  await next();
};

module.exports = {
  verifyUser
};

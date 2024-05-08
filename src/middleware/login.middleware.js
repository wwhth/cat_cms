const jwt = require("jsonwebtoken");
const userService = require("../service/user");
const md5password = require("../utils/md5password");
const user = require("../service/user");
async function login(ctx, next) {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit(
      "error",
      {
        status: -1001,
        message: "用户名或密码不能为空"
      },
      ctx
    );
  }
  const userList = await userService.getUserList(ctx.request.body);
  console.log("%c Line:16 🥥 userList", "color:#2eafb0", userList);
  if (userList[0]) {
    if (userList[0].password === md5password(password)) {
      ctx.user = {
        id: userList[0].id,
        name,
        password
      };
      next();
    } else {
      ctx.app.emit(
        "error",
        {
          status: -1002,
          message: "密码错误"
        },
        ctx
      );
    }
  } else {
    ctx.app.emit(
      "error",
      {
        status: -1003,
        message: "账号不存在"
      },
      ctx
    );
  }
}

module.exports = {
  login
};

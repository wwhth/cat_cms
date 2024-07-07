const userService = require("../service/user");
class UserController {
  async register(ctx) {
    console.log("%c Line:4 🍰 ctx", "color:#b03734", ctx.request.body);
    // if (!ctx.request.body.name || !ctx.request.body.password) {
    //   ctx.body = {
    //     code: -1001,
    //     msg: "用户名或密码不能为空"
    //   };
    //   return;
    // }
    // const userList = await userService.login(ctx.request.body);
    // if (userList.length > 0) {
    //   ctx.body = {
    //     code: -1002,
    //     msg: "用户已存在"
    //   };
    //   return;
    // }
    const result = await userService.register(ctx.request.body);
    console.log("%c Line:6 🥓 result", "color:#4fff4B", result);
    ctx.body = result;
  }
  async getMenuList(ctx) {
    console.log("%c Line:25 🍰 ctx", "color:#f5ce50", ctx);
    const result = await userService.getMenuList();
    ctx.body = result;
  }
}
module.exports = new UserController(); // 导出实例

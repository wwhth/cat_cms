const userService = require("../service/user");
class UserController {
  async register(ctx, next) {
    console.log("%c Line:4 🍰 ctx", "color:#b03734", ctx.request.body);
    const result = await userService.register(ctx.request.body);
    console.log("%c Line:6 🥓 result", "color:#4fff4B", result);
    ctx.body = result;
  }
}
module.exports = new UserController(); // 导出实例

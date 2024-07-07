const { privateKey } = require("../config/secret");
const jwt = require("jsonwebtoken");
class LoginController {
  loginAndToken(ctx) {
    console.log(ctx.user, "------");
    const { id, name } = ctx.user;
    const payload = {
      id,
      name
    };
    const token = jwt.sign(payload, privateKey, { expiresIn: "30d", algorithm: "RS256" });
    console.log("%c Line:12 🥕 token", "color:#ed9ec7", token);
    ctx.body = {
      code: 0,
      data: {
        token
      },
      message: "登录成功"
    };
  }
}

module.exports = new LoginController();

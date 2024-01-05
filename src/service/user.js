const connection = require("../app/database");
class UserService {
  async register(user) {
    const newCountResult = await connection
      .execute(`INSERT INTO user_account (name, password) VALUES (?,?)`, [user.name, user.password])
      .then((res) => {
        const [values] = res;
        return values;
      })
      .catch((err) => {
        return {
          code: 500,
          msg: "服务器错误"
        };
      });
    if (newCountResult.affectedRows === 1) {
      return {
        code: 0,
        msg: "注册成功"
      };
    }
  }
  async getUserList(user) {
    console.log("%c Line:25 🥪 user", "color:#42b983", user);
    const userList = await connection
      .execute(`SELECT * FROM user_account WHERE name =?`, [user.name])
      .then((res) => {
        const [values] = res;
        return values;
      })
      .catch((err) => {
        console.log(err);
      });
    return userList;
  }
}

module.exports = new UserService();

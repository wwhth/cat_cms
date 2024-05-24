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
  // 获取菜单
  async getMenuList(user) {
    const menuList = await connection
      .execute(
        `SELECT bm.* ,JSON_ARRAYAGG(JSON_OBJECT('id',bmc.id,'name',bmc.name,'parentId',bmc.parentId,'url',bmc.url,'type',bmc.type,'sort',bmc.sort,'icon',bmc.icon) ) as children FROM  blog_menu bm left join blog_menu_child bmc ON bm.id = bmc.parentId`
      )
      .then((res) => {
        const [values] = res;
        return values;
      })
      .catch((err) => {
        console.log(err);
      });
    return {
      code: 0,
      message: "获取成功",
      data: menuList
    };
  }
}

module.exports = new UserService();

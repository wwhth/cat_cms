const crypto = require("crypto");

const md5password = (password) => {
  const md5 = crypto.createHash("md5");
  // const md5Salt = md5.update(salt).digest('hex');
  const md5Password = md5.update(password).digest("hex");
  return md5Password;
};
module.exports = md5password;

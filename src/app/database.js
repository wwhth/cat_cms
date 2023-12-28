const mysql = require("mysql2");
const connectionPool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Zzyz1215",
  database: "user"
  // connectionLimit: 10
});

connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("%c Line:13 🍐 err", "color:#7f2b82", err);
    console.log("连接失败");
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("连接成功");
    }
  });
});
const connection = connectionPool.promise();
module.exports = connection;
// module.exports.query = function (sql, values) {
//   return new Promise((resolve, reject) => {
//     connectionPool.query(sql, values, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
// module.exports.queryOne = function (sql, values) {
//   return new Promise((resolve, reject) => {
//     connectionPool.query(sql, values, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results[0]);
//       }
//     });
//   });
// };
// module.exports.queryCount = function (sql, values) {
//   return new Promise((resolve, reject) => {
//     connectionPool.query(sql, values, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results[0]["count(*)"]);
//       }
//     });
//   });
// };

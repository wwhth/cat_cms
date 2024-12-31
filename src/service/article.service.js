const connection = require("../app/database");

class ArticleService {
  // 获取全部文章
  async getAll() {
    const articleList = await connection
      .query(
        "select ba.id as id, ba.title as title,ba.intro as introduce, ba.artical_type as artical_type, ba.author as userid,ua.`name` as username,ba.created_at as date, bc.id as category_id,bc.category_name as category,bl.label_name as label,bl.id as label_id,ba.content as content from blog_article ba LEFT JOIN blog_category bc ON  ba.category_id = bc.id LEFT JOIN blog_label bl on ba.label_id =bl.id LEFT JOIN user_account ua on ba.author = ua.id ORDER BY ba.created_at DESC;"
      )
      .then((res) => {
        const [values] = res;
        console.log("🚀 ~ ArticleService ~ .then ~ values:", values)
        return values;
      })
      .catch((err) => {
        console.log("🚀 ~ ArticleService ~ result ~ err:", err);
      });
    return articleList;
  }
  async getArticleById(id) {
    const article = await connection
      .query("select ba.id as id, ba.title as title,ba.intro as introduce,ba.artical_type as artical_type , ba.author as userid,ua.`name` as username,ba.created_at as date, bc.id as category_id,bc.category_name as category,bl.label_name as label,bl.id as label_id,ba.content as content from blog_article ba left join blog_label bl on ba.label_id = bl.id left join blog_category bc on ba.category_id = bc.id LEFT JOIN user_account ua on ba.author = ua.id where ba.id = ?;", [id])
      .then((res) => {
        console.log("🚀 ~ ArticleService ~ article ~ res:", res);
        const values = res[0];
        return values;
      })
      .catch((err) => {
        console.log("🚀 ~ ArticleService ~ result ~ err:", err);
      });
    return article;
  }
  async createArticle(body) {
    const { title, userid, content, category_id, label_id,artical_type } = body;
    console.log("%c Line:34 🍪 title, userid, content, category_id, label_id", "color:#ea7e5c", title, userid, content, category_id, label_id,artical_type);
    const result = await connection
      .query("insert into blog_article (title,author,content,category_id,label_id,intro) values (?,?,?,?,?,?)", [
        title,
        userid,
        content,
        category_id,
        label_id,
        introduce
      ])
      .then((_) => {
        return {
          code: 200,
          message: "创建成功"
        };
      })
      .catch((err) => {
        console.log("%c Line:50 🍢 err", "color:#93c0a4", err);
        return {
          code: 500,
          message: "创建失败"
        };
      });
    console.log("🚀 ~ ArticleService ~ result ~ result:", result);
    return result;
  }
  async deleteArticle(id) {
    const result = await connection
      .query("delete from blog_article where id = ?", [id])
      .then((_) => {
        return {
          code: 200,
          message: "删除成功"
        };
      })
      .catch((err) => {
        return {
          code: 500,
          message: "删除失败"
        };
      });
    return result;
  }
  async updateArticle(body) {
    const { id, title, content, category_id, label_id, introduce,artical_type } = body;
    console.log("🚀 ~ ArticleService ~ updateArticle ~ artical_type:", artical_type)
    const result = await connection
      .query("update blog_article set title = ?,intro =?,content = ?,category_id = ?,label_id = ?,artical_type =?  where id = ?", [title, introduce, content, category_id, label_id,artical_type, id])
      .then((_) => {
        return {
          code: 200,
          message: "更新成功"
        };
      })
      .catch((err) => {
        return {
          code: 500,
          message: "更新失败"
        };
      });
    return result;
  }
  async searchArticle() { }
  async getArticleByLabelId(id) {
    const article = await connection
      .query("select ba.id as id, ba.title as title,ba.intro as introduce, ba.artical_type as artical_type, ba.author as userid,ua.`name` as username,ba.created_at as date, bc.id as category_id,bc.category_name as category,bl.label_name as label,bl.id as label_id,ba.content as content from blog_article ba left join blog_label bl on ba.label_id = bl.id left join blog_category bc on ba.category_id = bc.id LEFT JOIN user_account ua on ba.author = ua.id where bl.id = ?;", [id])
      .then((res) => {
        const values = res[0];
        return values;
      })
      .catch((err) => {
        console.log("🚀 ~ getArticleByLabelId ~ result ~ err:", err);
      });
    return article;
  }
}

module.exports = new ArticleService();

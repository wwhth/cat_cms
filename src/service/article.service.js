const connection = require("../app/database")

class ArticleService {
	// 获取全部文章
	async getAll() {
		const articleList = await connection.query("select ba.id as id, ba.title as title,ba.author as userid,ua.`name` as username, bc.category_name as category,bl.label_name as label,ba.content as content from blog_article ba LEFT JOIN blog_category bc ON  ba.category_id = bc.id LEFT JOIN blog_label bl on ba.label_id =bl.id LEFT JOIN user_account ua on ba.author = ua.id;").then((res) => {
			const [values] = res;
			return values;

		}).catch((err) => {
			console.log("🚀 ~ ArticleService ~ result ~ err:", err)
		});;
		return articleList
	}
	async getArticleById() { }
	async createArticle() { }
	async deleteArticle() { }
	async updateArticle() { }
	async searchArticle() { }
}

module.exports = new ArticleService();
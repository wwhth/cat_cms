const connection = require("../app/database")

class ArticleService {
	// 获取全部文章
	async getAll() {
		const articleList = await connection.query("select ba.id as id, ba.title as title,ba.author as userid,ua.`name` as username, bc.id as category_id,bc.category_name as category,bl.label_name as label,bl.id as label_id,ba.content as content from blog_article ba LEFT JOIN blog_category bc ON  ba.category_id = bc.id LEFT JOIN blog_label bl on ba.label_id =bl.id LEFT JOIN user_account ua on ba.author = ua.id;").then((res) => {
			const [values] = res;
			return values;

		}).catch((err) => {
			console.log("🚀 ~ ArticleService ~ result ~ err:", err)
		});;
		return articleList
	}
	async getArticleById(id) {
		const article = await connection.query("select * from blog_article where id = ?", [id]).then((res) => {
			console.log("🚀 ~ ArticleService ~ article ~ res:", res)
			const values = res[0];
			return values;
		}).catch((err) => {
			console.log("🚀 ~ ArticleService ~ result ~ err:", err)
		});;
		return article
	}
	async createArticle(body) {
		const { title, author, content, category_id, label_id } = body
		const result = await connection.query("insert into blog_article (title,author,content,category_id,label_id) values (?,?,?,?,?)", [title, author, content, category_id, label_id]).then((_) => {
			return {
				code: 200,
				message: "创建成功",
			}
		}).catch((err) => {
			return {
				code: 500,
				message: "创建失败",
			}
		})
		console.log("🚀 ~ ArticleService ~ result ~ result:", result)
		return result
	}
	async deleteArticle(id) {
		const result = await connection.query("delete from blog_article where id = ?", [id]).then((_) => {
			return {
				code: 200,
				message: "删除成功",
			}
		}).catch((err) => {
			return {
				code: 500,
				message: "删除失败",
			}
		})
		return result
	}
	async updateArticle(body) {
		const { id, title, author, content, category_id, label_id } = body
		const result = await connection.query("update blog_article set title = ?,author = ?,content = ?,category_id = ?,label_id = ? where id = ?", [title, author, content, category_id, label_id, id]).then((_) => {
			return {
				code: 200,
				message: "更新成功",
			}
		}).catch((err) => {
			return {
				code: 500,
				message: "更新失败",
			}
		})
		return result
	}
	async searchArticle() { }
}

module.exports = new ArticleService();
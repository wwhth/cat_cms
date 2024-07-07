const connection = require("../app/database");

class LabelService {
	async getLabelById(id) {
		const result = await connection.query("SELECT * FROM blog_label WHERE id = ?", [id]).then((res) => {
			const [values] = res;
			return values;
		}).catch((err) => {
			throw err
		});
		return result;
	}
	async getSameLabel(label_name) {
		const result = await connection.query("SELECT * FROM blog_label WHERE label_name = ?", [label_name]).then((res) => {
			const [values] = res;
			return values;
		}).catch((err) => {

			throw err
		})
		return result
	}
	async getAll() {
		const lableList = await connection.query("SELECT bl.id,bl.label_name as name,bc.category_name as category,bl.category_id as category_id FROM blog_label bl LEFT JOIN blog_category bc ON bc.id = bl.category_id").then((res) => {
			const [values] = res;
			return values;
		}).catch((err) => {
			throw err
		});;
		return lableList;
	}
	async createLabel(label_name, category_id) {
		const result = await connection.query("INSERT INTO blog_label (label_name,category_id) VALUES (?,?)", [label_name, category_id]).then(_ => {
			return {
				code: 200,
				message: "创建成功",
			}
		}).catch(err => {
			return {
				code: 500,
				message: "创建失败",
			}
		});
		return result
	}
	async updateLabel(id, label_name, category_id) {

		const result = await connection.query("UPDATE blog_label SET label_name = ?,category_id = ? WHERE id = ?", [label_name, category_id, id]).then(_ => {
			return {
				code: 200,
				message: "更新成功",
			}
		}).catch(err => {
			return {
				code: 500,
				message: "更新失败"
			}
		});
		return result
	}
	async deleteLabel(id) {

		const result = await connection.query("DELETE FROM blog_label WHERE id = ?", [id]).then(res => {
			const [field, values] = res
			return {
				code: 200,
				message: "删除成功",
			}
		}).catch(err => {
			return {
				code: 500,
				message: "删除失败",
			}
		});
		return result
	}
}


module.exports = new LabelService();

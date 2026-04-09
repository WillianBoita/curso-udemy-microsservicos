import sequelize from "sequelize";
import sql from "../../config/db/dbConfig.js";

const Category = sql.define("category", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: sequelize.STRING
  }
}, {tableName: "Categories"})

export default Category;
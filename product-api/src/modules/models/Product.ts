import sequelize from "sequelize";
import sql from "../../config/db/dbConfig.js";

const Product = sql.define("product", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: true
  },
}, {tableName: "products"})

export default Product;
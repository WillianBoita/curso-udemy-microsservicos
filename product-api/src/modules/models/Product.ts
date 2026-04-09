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
  },
  qtdAvailable: {
    type: sequelize.INTEGER,
  },
}, {tableName: "products"})

export default Product;
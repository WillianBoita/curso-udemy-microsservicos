import sequelize from "sequelize";
import sql from "../../../config/db/dbConfig.js";

const Supplier = sql.define("supplier", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: true
  }
}, {tableName: "suppliers"})

export default Supplier;
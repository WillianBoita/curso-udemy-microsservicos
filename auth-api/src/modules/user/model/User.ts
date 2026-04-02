import sequelize from "sequelize";
import sql from "../../../config/db/dbConfig.js";

const User = sql.define("user", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: true
  },
  email: {
    type: sequelize.STRING,
    allowNull: true
  }, 
  password: {
    type: sequelize.STRING,
    allowNull: true
  }
}, {})

export default User;
import sequelize from "sequelize";
import sql from "../../../config/db/dbConfig.js";

export const ProductCategory = sql.define('product_categories', {
  product_id: sequelize.INTEGER,
  category_id: sequelize.INTEGER
}, {
  timestamps: false
});

export const ProductSupplier = sql.define('product_suppliers', {
  product_id: sequelize.INTEGER,
  supplier_id: sequelize.INTEGER
}, {
  timestamps: false
});

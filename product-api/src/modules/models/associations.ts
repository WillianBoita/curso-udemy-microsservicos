import Product from "./Product.js";
import Category from "./Category.js";
import Supplier from "./Supplier.js";
import { ProductCategory, ProductSupplier } from "./fkTables.js";

// associações
Product.belongsToMany(Category, {
  through: ProductCategory,
  foreignKey: 'product_id',
  otherKey: 'category_id'
});

Category.belongsToMany(Product, {
  through: ProductCategory,
  foreignKey: 'category_id',
  otherKey: 'product_id'
});

Product.belongsToMany(Supplier, {
  through: ProductSupplier,
  foreignKey: 'product_id',
  otherKey: 'supplier_id'
});

Supplier.belongsToMany(Product, {
  through: ProductSupplier,
  foreignKey: 'supplier_id',
  otherKey: 'product_id'
});

export {
  Product,
  Category,
  Supplier
};
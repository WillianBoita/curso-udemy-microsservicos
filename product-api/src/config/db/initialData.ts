import { Product, Category, Supplier } from "../../modules/models/associations.js";
import sql from "./dbConfig.js";

export async function createInitialData() {
  try {
    await sql.sync({ force: true });

    const products = await Product.bulkCreate([
      { name: "Pizza Calabresa", qtdAvailable: 4 },
      { name: "Pizza Mussarela", qtdAvailable: 0 },
      { name: "Pizza Frango", qtdAvailable: 3 }
    ]);
    
    const suppliers = await Supplier.bulkCreate([
      { name: "Fred Fornecedor" },
      { name: "Fornecedor de Merda" }
    ]);
    
    const categories = await Category.bulkCreate([
      { description: "Pizzas" },
      { description: "Salgados" }
    ]);


    await Promise.all(products.map(async (p: any) => {
      await (p as any).addSupplier(
        suppliers[Math.floor(Math.random() * suppliers.length)]
      );
    
      await (p as any).addCategory(
        categories[Math.floor(Math.random() * categories.length)]
      );
    }));


  } catch (error) {
    console.error(error)
  }
}
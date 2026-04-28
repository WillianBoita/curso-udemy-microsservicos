import sequelize from "sequelize";

const sequelizeInstance = sequelize.Sequelize
const sql = new sequelizeInstance(process.env.PRODUCT_DATABASE, process.env.PRODUCT_USER, process.env.PRODUCT_PASSWORD, {
  host: "localhost",
  port: process.env.DB_PORT,
  dialect: "postgres",
  quoteIdentifiers: false,
  define: {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  }
})

sql.authenticate().then(() => {
  console.info('\nConectou com sucesso')
}).catch((err) => {
  console.error(err)
})

export default sql;
import sequelize from "sequelize";

const sequelizeInstance = sequelize.Sequelize
const sql = new sequelizeInstance(process.env.AUTH_DATABASE, process.env.AUTH_USER, process.env.AUTH_PASSWORD, {
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
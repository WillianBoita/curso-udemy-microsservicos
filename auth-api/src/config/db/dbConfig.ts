import sequelize from "sequelize";

const sequelizeInstance = sequelize.Sequelize
const sql = new sequelizeInstance("auth-db", "postgres", "09wb06", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  define: {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  }
})

sql.authenticate().then(() => {
  console.info('Conectou com sucesso')
}).catch((err) => {
  console.error(err)
})

export default sql;
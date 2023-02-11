import { Sequelize } from "sequelize-typescript";

const dbConnection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  port: 3306,
  database: "my_portfolio",
  logging: false,
  // password: "aimelive",
  models: ["blogs"],
});

export default dbConnection;

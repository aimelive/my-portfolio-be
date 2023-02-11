import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const DB_URL: string = process.env.DB_URL!;

const dbConnection = new Sequelize(DB_URL, { logging: false });

export default dbConnection;

import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
// import path = require("path")
// const entities_path = path.join(__dirname, './entity/*.ts')
// console.log('entities_path---', entities_path)

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root123",
  database: "typeorm_test",
  synchronize: true,
  logging: false,
  // entities: [entities_path],
  entities: [User],
  migrations: [],
  subscribers: [],
})

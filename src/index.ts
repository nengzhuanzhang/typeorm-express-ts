import { AppDataSource } from "./data-source"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from "cors"
import { Request, Response } from "express"
import { AppRoutes } from "./routes";


AppDataSource.initialize().then(async () => {

  console.log("into the database...")

  // create a new express app
  const app = express();
  app.use(bodyParser.json());

  app.use(cors());

  // register all application route
  AppRoutes.forEach(route => {
    app[route.method](route.path, (req: Request, res: Response, next: Function) => {
      route.action(req, res).then(() => next).catch(err => next(err))
    })
  })

  app.listen(9000)
  console.log("Express application is up and running on port 9000");


}).catch(error => console.log(error))

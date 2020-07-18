import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";
import * as dotenv from 'dotenv';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = '';
  
  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    dotenv.config();
    this.mongoUrl = process.env.MONGO_URL;
    this.mongoSetup();
  }
  
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}

export default new App().app;
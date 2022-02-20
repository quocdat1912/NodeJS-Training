import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import { Routes } from "./routes/crmRoutes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb'; 

    constructor() {
        this.app = express();
        this.config();  
        this.routePrv.routes(this.app);
        this.mongoSetup()
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;
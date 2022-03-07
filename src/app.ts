import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Routes } from "./routes/crmRoutes";
import { Connection, createConnection } from "typeorm";

class App {
    public app: express.Application;
    public routePrv: Routes;
    public dbConnection: Connection;

    constructor() {
        this.app = express();
        this.config();
        this.connectDb();
    }

    private config(): void {
        dotenv.config({
            path: path.join(__dirname, `../${process.env.NODE_ENV}.env`)
        });
        // Middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private connectDb(): void {
        createConnection().then(connection => {
            this.dbConnection = connection;
            console.log("Connect database successful")
            this.routePrv = new Routes();
            this.routePrv.routes(this.app);
        }).catch(e => console.log("Connect database error:" + `${e}`));
    }

}

export default new App().app;
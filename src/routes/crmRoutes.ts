import { Project } from "../entity/Project";
import {BaseController } from "../controllers/baseController";
import { getRepository } from "typeorm";
import { Customer } from "../entity/Customer";
import { Division } from "../entity/Division";
import { User } from "../entity/User";


export class Routes {       
    public routes(app): void {          
        this.setupProjectRoutes(app);
        this.setupCustomerRoutes(app);
        this.setupDivisionRoutes(app);
        this.setupUserRoutes(app);
    }

    private setupProjectRoutes(app) {
        let controller = new BaseController(
            getRepository(Project)
        );
        app.route('/projects')
        .get(controller.getAll.bind(controller))
        .post(controller.create.bind(controller))
        app.route('/projects/:id')
        .get(controller.getDetail.bind(controller))
        .put(controller.update.bind(controller))
        .delete(controller.delete.bind(controller))
    }


    private setupCustomerRoutes(app) {
        let controller = new BaseController(
            getRepository(Customer)
        );
        app.route('/customers')
        .get(controller.getAll.bind(controller))
        .post(controller.create.bind(controller))
        app.route('/customers/:id')
        .get(controller.getDetail.bind(controller))
        .put(controller.update.bind(controller))
        .delete(controller.delete.bind(controller))
    }

    private setupUserRoutes(app) {
        let controller = new BaseController(
            getRepository(User)
        );
        app.route('/users')
        .get(controller.getAll.bind(controller))
        .post(controller.create.bind(controller))
        app.route('/users/:id')
        .get(controller.getDetail.bind(controller))
        .put(controller.update.bind(controller))
        .delete(controller.delete.bind(controller))
    }

    private setupDivisionRoutes(app) {
        let controller = new BaseController(
            getRepository(Division)
        );
        app.route('/divisions')
        .get(controller.getAll.bind(controller))
        .post(controller.create.bind(controller))
        app.route('/divisions/:id')
        .get(controller.getDetail.bind(controller))
        .put(controller.update.bind(controller))
        .delete(controller.delete.bind(controller))
    }
}
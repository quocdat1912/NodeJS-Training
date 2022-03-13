import auth from "../middleware/auth"
import { ProjectController } from "../controllers/projectController";
import { CustomerController } from "../controllers/customerController";
import { UserController } from "../controllers/userController";
import { DivisionController } from "../controllers/divisionController";


export class Routes {
    public routes(app): void {
        this.setupProjectRoutes(app);
        this.setupCustomerRoutes(app);
        this.setupDivisionRoutes(app);
        this.setupUserRoutes(app);
    }

    private setupProjectRoutes(app) {
        let controller = new ProjectController();
        app.route('/projects')
            .get(auth, controller.getAll.bind(controller))
            .post(auth, controller.create.bind(controller))
        app.route('/projects/:id')
            .get(auth, controller.getDetail.bind(controller))
            .put(auth, controller.update.bind(controller))
            .delete(auth, controller.delete.bind(controller))
    }


    private setupCustomerRoutes(app) {
        let controller = new CustomerController();
        app.route('/customers')
            .get(auth, controller.getAll.bind(controller))
            .post(auth, controller.create.bind(controller))
        app.route('/customers/:id')
            .get(auth, controller.getDetail.bind(controller))
            .put(auth, controller.update.bind(controller))
            .delete(auth, controller.delete.bind(controller))
    }

    private setupUserRoutes(app) {
        let controller = new UserController();
        app.route('/users')
            .get(auth, controller.getAll.bind(controller))
        app.route('/users/:id')
            .get(auth, controller.getDetail.bind(controller))
            .put(auth, controller.update.bind(controller))
            .delete(controller.delete.bind(controller))
        app.route('/register')
            .post(controller.register.bind(controller))
        app.route('/login')
            .post(controller.login.bind(controller))
    }

    private setupDivisionRoutes(app) {
        let controller = new DivisionController();
        app.route('/divisions')
            .get(controller.getAll.bind(controller))
            .post(controller.create.bind(controller))
        app.route('/divisions/:id')
            .get(controller.getDetail.bind(controller))
            .put(controller.update.bind(controller))
            .delete(controller.delete.bind(controller))
    }
}
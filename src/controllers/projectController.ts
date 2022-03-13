import { Project } from "../entity/Project";
import { BaseController } from "./baseController";

export class ProjectController extends BaseController {
    constructor() {
        super(Project);
    }
}
import { Customer } from "../entity/Customer";

import { BaseController } from "./baseController";

export class CustomerController extends BaseController {
    constructor() {
        super(Customer);
    }
}
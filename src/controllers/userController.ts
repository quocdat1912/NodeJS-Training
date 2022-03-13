import { User } from "../entity/User";
import { BaseController } from "./baseController";
import { Request, Response } from 'express';
import { success, validation, error } from "../common/response_api";
import { constants } from "../common/constant";
import * as jwt from "jsonwebtoken";


export class UserController extends BaseController {
    constructor() {
        super(User);
    }

    async register(request: Request, response: Response) {
        try {
            const { firstName, lastName, email, password, phone } = request.body;
            const oldUser = await this.repository.findOne({ email });
            if (oldUser) {
                return response.status(409).send(
                    validation(constants.existedUserMsg)
                );
            }
            const user = await this.repository.save({
                firstName,
                lastName,
                email: email.toLowerCase(),
                password: password,
                phone: phone
            });
            if (user) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                user.token = token;
                return response.send(success(constants.successMsg, user, 200));
            }
            response.send(error(constants.errorMsg, 404))
        } catch (e) {
            console.log(e)
            response.send(error(constants.errorMsg, 404))
        }
    }

    async login(request: Request, response: Response) {
        try {
            const { email, password } = request.body;
            if (!(email && password)) {
                response.status(400).send(error(constants.loginRequiredMsg, 400));
            }
            const user = await this.repository.findOne({ where: { email } });
            if (user) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                user.token = token;
                response.send(success(constants.successMsg, user, 200));
            }
            console.log({ user })
            response.send(validation(constants.errorUserNameOrPassword))
        } catch (e) {
            console.log(e)
            response.send(error(constants.errorMsg, 404))
        }
    }
}
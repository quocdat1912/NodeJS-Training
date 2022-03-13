import { getRepository, Repository } from "typeorm";
import { Request, Response } from 'express';
import { success, validation, error } from "../common/response_api";
import { constants } from "../common/constant";

export class BaseController {
    public repository: Repository<any>;

    constructor(repo: any) {
        this.repository = getRepository(repo);
    }

    async getAll(request: Request, response: Response) {
        try {
            let result = await this.repository.find();
            response.send(success(constants.successMsg, result, 200));
        } catch (e) {
            response.send(error(constants.errorMsg, 404))
        }

    }

    async getDetail(request: Request, response: Response) {
        try {
            let result = await this.repository.findOne(request.params.id);
            if (result) {
                response.send(success(constants.successMsg, result, 200));
            } else {
                response.send(error(constants.notFound, 404))
            }

        } catch (e) {
            response.send(error(constants.errorMsg, 404))
        }
    }

    async create(request: Request, response: Response) {
        try {
            let result = await this.repository.save(request.body);
            response.send(success(constants.successMsg, result, 200));
        } catch (e) {
            response.send(error(constants.errorMsg, 404))
        }
    }

    async delete(request: Request, response: Response) {
        try {
            let removeProject = await this.repository.findOne(request.params.id);
            await this.repository.remove(removeProject);
            response.send(success(constants.successMsg, { id: request.params.id }, 200));
        } catch (e) {
            response.send(error(constants.notFound, 404))
        }
    }

    async update(request: Request, response: Response) {
        try {
            await this.repository.update(request.params.id, request.body);
            let result = await this.repository.findOne(request.params.id);
            response.send(success(constants.successMsg, result, 200));
        } catch (e) {
            response.send(error(constants.errorMsg, 404))
        }

    }
}
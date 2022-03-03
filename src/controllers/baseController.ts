import {getRepository, Repository} from "typeorm";
import { Project } from "../entity/Project";
import { Request, Response } from 'express';

export class BaseController {
    private repository
    
    constructor(repo: Repository<any> ) {
        this.repository = repo;
    }

    async getAll(request: Request, response: Response) {
        let result = await this.repository.find();
        response.send(result);
    }

    async getDetail(request: Request, response: Response) {
        let result = await this.repository.findOne(request.params.id);
        response.send(result)
    }

    async create(request: Request, response: Response) {
        let result = await this.repository.save(request.body);
        response.send(result)
    }

    async delete(request: Request, response: Response) {
        let removeProject = await this.repository.findOne(request.params.id);
        let result = await this.repository.remove(removeProject);
        response.send(result)
    }

    async update(request: Request, response: Response) {
        await this.repository.update(request.params.id, request.body);
        let result = await this.repository.findOne(request.params.id);
        response.send(result)
    }
}
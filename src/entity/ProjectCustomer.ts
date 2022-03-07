import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Project } from "./Project";
import { Customer } from "./Customer";

@Entity()
export class ProjectCustomer {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Project, project => project.projectCustomers)
    project: Project;

    @ManyToOne(()=> Customer, customer => customer.projectCustomers)
    customer: Customer;
}

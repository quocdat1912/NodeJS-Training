import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProjectCustomer } from "./ProjectCustomer";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    address: string;

    @Column({nullable: true})
    phone: string;

    @OneToMany(() => ProjectCustomer, projectCustomer => projectCustomer.customer)
    projectCustomers: ProjectCustomer[]
}

import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProjectMember } from "./ProjectMember";
import { ProjectCustomer } from "./ProjectCustomer";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    budget: number;

    @OneToMany(() => ProjectMember, projectMember => projectMember.project)
    projectMembers:  ProjectMember[];

    @OneToMany(() => ProjectCustomer, projectCustomer => projectCustomer.project)
    projectCustomers:  ProjectCustomer[];
}

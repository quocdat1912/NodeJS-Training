import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {ProjectMember} from "./ProjectMember";
import { DivisionMember } from "./DivisionMember";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column({nullable: true})
    phone: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => ProjectMember, projectMember => projectMember.user)
    projectMembers: ProjectMember[];
    
    @OneToMany(() => DivisionMember, divisionMember => divisionMember.user)
    divisionMembers: DivisionMember[];
}

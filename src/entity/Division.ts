import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { DivisionMember } from "./DivisionMember";

@Entity()
export class Division {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    name: string;

    @OneToMany(() => DivisionMember, divisionMember => divisionMember.division)
    divisionMembers: DivisionMember[];
}

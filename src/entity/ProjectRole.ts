import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ProjectRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

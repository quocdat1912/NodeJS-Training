import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class DivisionRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}

import {Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Division } from "./Division";
import { DivisionRole } from "./DivisionRole";

@Entity()
export class DivisionMember {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Division, division => division.divisionMembers)
    division: Division

    @ManyToOne(() => User, user => user.divisionMembers)
    user: User;

    @OneToOne(() => DivisionRole) @JoinColumn()
    divisionRole: DivisionRole;
}

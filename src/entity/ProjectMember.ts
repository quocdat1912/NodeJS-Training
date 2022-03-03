import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { ProjectRole } from "./ProjectRole";
import { User } from "./User";
import { Project } from "./Project";

@Entity()
export class ProjectMember {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.projectMembers)
    user: User;

    @ManyToOne(() => Project, project => project.projectMembers)
    project: Project;

    @OneToOne(() => ProjectRole) @JoinColumn()
    projectRole: ProjectRole;
}

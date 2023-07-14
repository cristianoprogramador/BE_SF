import { type Project } from "@prisma/client";
import { type ICreateProjectDTO } from "./createProjectDTO";

export interface IProjectController {
  projects(): Promise<Project[]>;
  createProject(_: undefined, args: ICreateProjectDTO): Promise<Project>;
}

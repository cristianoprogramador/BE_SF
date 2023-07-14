import { type Project } from "@prisma/client";
import { type ICreateProjectDTO } from "./createProjectDTO";

export interface IProjectRepository {
  createProject(data: ICreateProjectDTO): Promise<Project>;
  getAllProjects(): Promise<Project[]>;
}

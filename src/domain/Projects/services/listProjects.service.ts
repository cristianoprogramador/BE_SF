import { ProjectRepository } from "../repository";
import { type IProjectRepository } from "../types";

export class ListProjectsService {
  private projectRepository: IProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  public async execute() {
    const data = await this.projectRepository.getAllProjects();
    return data;
  }
}

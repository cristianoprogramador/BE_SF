import { ProjectRepository } from "../repository";
import { type ICreateProjectDTO, type IProjectRepository } from "../types";

export class CreateProjectService {
  private projectRepository: IProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  public async execute(data: ICreateProjectDTO) {
    return this.projectRepository.createProject(data);
  }
}

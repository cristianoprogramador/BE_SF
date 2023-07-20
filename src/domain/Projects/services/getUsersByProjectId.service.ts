import { ProjectRepository } from "../repository";
import { type IProjectRepository } from "../types";

export class GetUsersByProjectIdService {
  private projectRepository: IProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  public async execute(data: number) {
    const result = this.projectRepository.getUsersByProjectId(data);
    return result;
  }
}

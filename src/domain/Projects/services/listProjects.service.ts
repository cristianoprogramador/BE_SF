import { type IProjectRepository } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class ListProjectsService {
  constructor(
    @inject("IProjectRepository")
    private projectRepository: IProjectRepository
  ) {}

  public async execute() {
    const data = await this.projectRepository.getAllProjects();
    return data;
  }
}

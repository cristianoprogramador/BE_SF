import { injectable, inject } from "tsyringe";
import { type ICreateProjectDTO, type IProjectRepository } from "../types";

@injectable()
export class CreateProjectService {
  constructor(
    @inject("IProjectRepository")
    private projectRepository: IProjectRepository
  ) {}

  public async execute(data: ICreateProjectDTO) {
    const result = this.projectRepository.createProject(data);
    return result;
  }
}

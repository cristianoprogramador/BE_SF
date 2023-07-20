import { inject, injectable } from "tsyringe";
import { type IProjectRepository } from "../types";

@injectable()
export class GetUsersByProjectIdService {
  constructor(
    @inject("IProjectRepository")
    private projectRepository: IProjectRepository
  ) {}

  public async execute(data: number) {
    const result = this.projectRepository.getUsersByProjectId(data);
    return result;
  }
}

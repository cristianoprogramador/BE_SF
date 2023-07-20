import { type IUserRepository } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetProjectsByUserIdService {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(data: number) {
    const result = this.userRepository.getProjectsByUserId(data);
    return result;
  }
}

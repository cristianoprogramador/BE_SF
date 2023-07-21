import { type IUserRepository } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class ListUsersService {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute() {
    const data = await this.userRepository.getAllUsers();
    return data;
  }
}

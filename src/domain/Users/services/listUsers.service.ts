import { UserRepository } from "../repository";
import { type IUserRepository } from "../types";

export class ListUsersService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute() {
    const data = await this.userRepository.getAllUsers();
    return data;
  }
}

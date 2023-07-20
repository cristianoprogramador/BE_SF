import { UserRepository } from "../repository";
import { type ICreateUserDTO, type IUserRepository } from "../types";

export class CreateUsersService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute(data: ICreateUserDTO) {
    const result = this.userRepository.createUser(data);
    return result;
  }
}

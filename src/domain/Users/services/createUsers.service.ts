import { type IUserRepository, type ICreateUserDTO } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class CreateUsersService {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(data: ICreateUserDTO) {
    const result = this.userRepository.createUser(data);
    return result;
  }
}

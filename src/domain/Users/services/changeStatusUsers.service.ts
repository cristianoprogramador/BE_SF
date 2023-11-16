import { type IUserRepository, type IChangeStatusUserDTO } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class ChangeStatusUsersService {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(userId: number, data: IChangeStatusUserDTO) {
    const result = this.userRepository.changeStatusUser(userId, data);
    return result;
  }
}

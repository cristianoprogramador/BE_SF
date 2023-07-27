import { type IUserRepository, type IEditUserDTO } from "../types";
import { injectable, inject } from "tsyringe";

@injectable()
export class EditUsersService {
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute(userId: number, data: IEditUserDTO) {
    const result = this.userRepository.editUser(userId, data);
    return result;
  }
}

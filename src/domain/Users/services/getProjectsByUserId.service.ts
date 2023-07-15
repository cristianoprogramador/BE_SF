import { UserRepository } from "../repository";
import { type IUserRepository } from "../types";

export class GetProjectsByUserIdService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async execute(data: number) {
    const result = this.userRepository.getProjectsByUserId(data);
    return result;
  }
}

import { type User } from "@prisma/client";
import {
  CreateUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
} from "./services";
import { type ICreateUserDTO, type IUserController } from "./types";

export class UserController implements IUserController {
  public async usersQuery() {
    const listUsersService = new ListUsersService();
    return listUsersService.execute();
  }
  public async createUserMutation(_: undefined, args: ICreateUserDTO) {
    const createUsersService = new CreateUsersService();
    return createUsersService.execute(args);
  }

  public async userProjects(parent: User) {
    const getProjectsByUserIdService = new GetProjectsByUserIdService();
    return getProjectsByUserIdService.execute(parent.id);
  }
}

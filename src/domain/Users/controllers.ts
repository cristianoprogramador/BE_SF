import { type User } from "@prisma/client";
import {
  CreateUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
} from "./services";
import { type ICreateUserDTO, type IUserController } from "./types";
import { container } from "tsyringe";

export class UserController implements IUserController {
  public async usersQuery() {
    const listUsersService = container.resolve(ListUsersService);
    return listUsersService.execute();
  }

  public async createUserMutation(_: undefined, args: ICreateUserDTO) {
    const createUsersService = container.resolve(CreateUsersService);
    return createUsersService.execute(args);
  }

  public async userProjects(parent: User) {
    const getProjectsByUserIdService = container.resolve(
      GetProjectsByUserIdService
    );
    return getProjectsByUserIdService.execute(parent.id);
  }
}

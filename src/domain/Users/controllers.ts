import { type User } from "@prisma/client";
import { container } from "tsyringe";
import {
  CreateUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
} from "./services";
import { EditUsersService } from "./services/editUsers.service";
import {
  type ICreateUserDTO,
  type IEditUserDTO,
  type IUserController,
} from "./types";

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

  public async editUserMutation(
    _: undefined,
    args: { id: number; createdAt: Date; status: string; data: IEditUserDTO }
  ) {
    const editUsersService = container.resolve(EditUsersService);
    return editUsersService.execute(args.id, args.data);
  }
}

import { type User } from "@prisma/client";
import {
  ChangeStatusUsersService,
  CreateUsersService,
  EditUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
} from "./services";
import {
  type IEditUserDTO,
  type ICreateUserDTO,
  type IUserController,
  type IChangeStatusUserDTO,
} from "./types";
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

  public async editUserMutation(
    _: undefined,
    args: { input: IEditUserDTO & { id: User["id"] } }
  ): Promise<User> {
    const { id, ...data } = args.input;
    const editUsersService = container.resolve(EditUsersService);
    return editUsersService.execute(id, data);
  }

  public async statusChangeMutation(
    _: undefined,
    args: { input: IChangeStatusUserDTO & { id: User["id"] } }
  ): Promise<User> {
    const { id, status } = args.input;
    const changeStatusUsersService = container.resolve(
      ChangeStatusUsersService
    );
    return changeStatusUsersService.execute(id, { status });
  }
}

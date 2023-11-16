import { type Project, type User } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";
import { type IEditUserDTO } from "./editUserDTO";
import { type IChangeStatusUserDTO } from "./changeStatusUserDTO";

export interface IUserController {
  usersQuery(): Promise<User[]>;
  editUserMutation(_: undefined, args: { input: IEditUserDTO }): Promise<User>;
  statusChangeMutation(
    _: undefined,
    args: { input: IChangeStatusUserDTO }
  ): Promise<User>;
  createUserMutation(_: undefined, args: ICreateUserDTO): Promise<User>;
  userProjects(parent: User): Promise<Project[]>;
}

import { type Project, type User } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";
import { type IEditUserDTO } from "./editUserDTO";

export interface IUserController {
  usersQuery(): Promise<User[]>;
  editUserMutation(_: undefined, args: { input: IEditUserDTO }): Promise<User>;
  createUserMutation(_: undefined, args: ICreateUserDTO): Promise<User>;
  userProjects(parent: User): Promise<Project[]>;
}

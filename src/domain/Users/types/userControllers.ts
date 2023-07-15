import { type User } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";

export interface IUserController {
  usersQuery(): Promise<User[]>;
  createUserMutation(_: undefined, args: ICreateUserDTO): Promise<User>;
}

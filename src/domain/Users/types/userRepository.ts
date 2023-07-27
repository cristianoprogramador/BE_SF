import { type User, type Project } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";
import { type IEditUserDTO } from "./editUserDTO";

export interface IUserRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  editUser(userId: User["id"], data: IEditUserDTO): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getProjectsByUserId(userId: User["id"]): Promise<Project[]>;
}

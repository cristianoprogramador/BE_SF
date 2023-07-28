import { type User, type Project } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";
import { type IEditUserDTO } from "./editUserDTO";
import { type IChangeStatusUserDTO } from "./changeStatusUserDTO";

export interface IUserRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  editUser(userId: number, data: IEditUserDTO): Promise<User>;
  changeStatusUser(userId: number, data: IChangeStatusUserDTO): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getProjectsByUserId(userId: User["id"]): Promise<Project[]>;
}

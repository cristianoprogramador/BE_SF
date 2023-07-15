import { type User, type Project } from "@prisma/client";
import { type ICreateUserDTO } from "./createUserDTO";

export interface IUserRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getProjectsByUserId(userId: User["id"]): Promise<Project[]>;
}

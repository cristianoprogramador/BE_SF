import { type User } from "@prisma/client";
import {
  type IEditUserDTO,
  type ICreateUserDTO,
  type IUserRepository,
  type IChangeStatusUserDTO,
} from "../types";
import { PrismaClient } from "@prisma/client";
import { injectable } from "tsyringe";

@injectable()
export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAllUsers() {
    return this.prisma.user.findMany();
  }

  public async createUser(data: ICreateUserDTO) {
    return this.prisma.user.create({ data });
  }

  public async getProjectsByUserId(userId: User["id"]) {
    return this.prisma.user
      .findUnique({ where: { id: userId } })
      .projects()
      .then((result) => result ?? []);
  }

  public async editUser(userId: User["id"], data: IEditUserDTO) {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  public async changeStatusUser(
    userId: User["id"],
    data: IChangeStatusUserDTO
  ) {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }
}

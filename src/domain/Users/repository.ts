import { type User } from "@prisma/client";
import { prisma } from "../../prisma";
import { type ICreateUserDTO, type IUserRepository } from "./types";

export class UserRepository implements IUserRepository {
  private prisma = prisma;

  constructor() {
    this.prisma = prisma;
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
}

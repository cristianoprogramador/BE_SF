import { PrismaClient, type User } from "@prisma/client";
import { type ICreateUserDTO, type IUserRepository } from "./types";

export class UserRepository implements IUserRepository {
  private prisma = new PrismaClient();

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
}

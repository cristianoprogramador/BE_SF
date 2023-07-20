import { type User } from "@prisma/client";
import { type ICreateUserDTO, type IUserRepository } from "./types";
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
}

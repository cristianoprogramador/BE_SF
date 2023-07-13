import { PrismaClient, type User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository";

const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    users: (): Promise<any> => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: (_: any, args: any): Promise<any> => {
      return prisma.user.create({ data: args });
    },
  },
  User: {
    projects: (parent: User): Promise<any[]> => {
      return userRepository.getProjectsByUserId(parent.id);
    },
  },
};

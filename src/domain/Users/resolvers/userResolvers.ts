import { PrismaClient, type Project, type User } from "@prisma/client";
import { userRepository } from "../repositories/userRepository";

const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    users: (): Promise<User[]> => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: (_: undefined, args: User): Promise<User> => {
      return prisma.user.create({ data: args });
    },
  },
  User: {
    projects: (parent: User): Promise<Project[]> => {
      return userRepository.getProjectsByUserId(parent.id);
    },
  },
};

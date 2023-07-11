import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const userService = {
  createUser: (args: User): Promise<User> => {
    return prisma.user.create({ data: args });
  },
};

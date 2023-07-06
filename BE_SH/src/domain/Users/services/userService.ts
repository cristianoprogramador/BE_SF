import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userService = {
  createUser: (args: any): Promise<any> => {
    return prisma.user.create({ data: args });
  },
};

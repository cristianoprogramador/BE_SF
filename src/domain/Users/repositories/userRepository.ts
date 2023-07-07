import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
  createUser: (data: any): Promise<any> => {
    return prisma.user.create({ data });
  },
  getProjectsByUserId: (userId: number): Promise<any[]> => {
    return prisma.user
      .findUnique({ where: { id: userId } })
      .projects()
      .then((result) => result ?? []);
  },
};

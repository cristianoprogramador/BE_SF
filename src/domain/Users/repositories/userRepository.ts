import { PrismaClient, Project, User } from "@prisma/client";

const prisma = new PrismaClient();

export const userRepository = {
  createUser: (data: User): Promise<User> => {
    return prisma.user.create({ data });
  },
  getProjectsByUserId: (userId: number): Promise<Project[]> => {
    return prisma.user
      .findUnique({ where: { id: userId } })
      .projects()
      .then((result) => result ?? []);
  },
};

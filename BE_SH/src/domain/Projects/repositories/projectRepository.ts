import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const projectRepository = {
  createProject: (data: any): Promise<any> => {
    return prisma.project.create({ data });
  },
  getUsersByProjectId: (projectId: number): Promise<any[]> => {
    return prisma.project
      .findUnique({ where: { id: projectId } })
      .users()
      .then((result) => result ?? []);
  },
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const projectService = {
  createProject: (args: any): Promise<any> => {
    return prisma.project.create({ data: args });
  },
};

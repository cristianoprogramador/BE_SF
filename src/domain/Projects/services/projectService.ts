import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

export const projectService = {
  createProject: (args: Project): Promise<Project> => {
    return prisma.project.create({ data: args });
  },
};

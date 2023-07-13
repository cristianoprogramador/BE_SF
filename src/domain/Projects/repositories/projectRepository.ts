import { PrismaClient, type Project, type User } from "@prisma/client";

const prisma = new PrismaClient();

export const projectRepository = {
  createProject: (data: Project): Promise<Project> => {
    return prisma.project.create({ data });
  },
  getUsersByProjectId: (projectId: number): Promise<User[]> => {
    return prisma.project
      .findUnique({ where: { id: projectId } })
      .users()
      .then((result) => result ?? []);
  },
};

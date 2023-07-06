import { PrismaClient, Project } from "@prisma/client";
import { projectRepository } from "../repositories/projectRepository";

const prisma = new PrismaClient();

export const projectResolvers = {
  Query: {
    projects: (): Promise<any> => {
      return prisma.project.findMany();
    },
  },
  Mutation: {
    createProject: (_: any, args: any): Promise<any> => {
      return prisma.project.create({ data: args });
    },
  },
  Project: {
    users: (parent: Project): Promise<any[]> => {
      return projectRepository.getUsersByProjectId(parent.id);
    },
  },
};

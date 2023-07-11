import { PrismaClient, type Project, type User } from "@prisma/client";
import { projectRepository } from "../repositories/projectRepository";

const prisma = new PrismaClient();

export const projectResolvers = {
  Query: {
    projects: (): Promise<Project[]> => {
      return prisma.project.findMany();
    },
  },
  Mutation: {
    createProject: (_: undefined, args: Project): Promise<Project> => {
      return prisma.project.create({ data: args });
    },
  },
  Project: {
    users: (parent: Project): Promise<User[]> => {
      return projectRepository.getUsersByProjectId(parent.id);
    },
  },
};

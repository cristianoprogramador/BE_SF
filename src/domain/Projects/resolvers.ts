import { ProjectController } from "./controllers";

const controller = new ProjectController();

export const projectResolvers = {
  Query: {
    projects: controller.projects,
  },
  Mutation: {
    createProject: controller.createProject,
  },
};

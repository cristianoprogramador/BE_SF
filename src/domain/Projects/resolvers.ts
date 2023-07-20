import { ProjectController } from "./controllers";

const controller = new ProjectController();

export const projectResolvers = {
  Query: {
    projects: controller.projectsQuery,
  },
  Mutation: {
    createProject: controller.createProjectMutation,
  },
  Project: {
    users: controller.projectUsers,
  },
};

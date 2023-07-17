import { ProjectController } from "./controllers";
import { container } from "tsyringe";

const controller = container.resolve(ProjectController);

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

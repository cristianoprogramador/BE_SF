import { UserController } from "./controllers";

const controller = new UserController();

export const userResolvers = {
  Query: {
    users: controller.usersQuery,
  },
  Mutation: {
    createUser: controller.createUserMutation,
  },
  User: {
    projects: controller.userProjects,
  },
};

import { UserController } from "./controllers";
import { container } from "tsyringe";

const controller = container.resolve(UserController);

export const userResolvers = {
  Query: {
    users: controller.usersQuery,
  },
  Mutation: {
    createUser: controller.createUserMutation,
    editUser: controller.editUserMutation,
    statusChangeUser: controller.statusChangeMutation,
  },
  User: {
    projects: controller.userProjects,
  },
};

import { container } from "tsyringe";

import {
  type IUserController,
  type IUserRepository,
} from "@/domain/Users/types";
import { UserRepository } from "@/domain/Users/repository";

import { UserController } from "@/domain/Users/controllers";

import {
  CreateUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
} from "@/domain/Users/services";

// Repositories
container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);

// Controllers
container.register<IUserController>("IUserController", {
  useClass: UserController,
});

// Services
container
  .register<CreateUsersService>("CreateUsersService", CreateUsersService)
  .register<GetProjectsByUserIdService>(
    "GetProjectsByUserIdService",
    GetProjectsByUserIdService
  )
  .register<ListUsersService>("ListUsersService", ListUsersService);

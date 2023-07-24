import "reflect-metadata";
import { container } from "tsyringe";
import { type IUserRepository } from "./src/domain/Users/types/userRepository";
import { UserRepositoryMock } from "./src/domain/Users/repositories/repositoryMock";
import {
  GetProjectsByUserIdService,
  ListUsersService,
} from "./src/domain/Users/services";

container
  .registerSingleton<IUserRepository>("IUserRepository", UserRepositoryMock)
  .register<ListUsersService>("ListUsersService", ListUsersService)
  .registerSingleton<IUserRepository>("IUserRepository", UserRepositoryMock)
  .register<GetProjectsByUserIdService>(
    "GetProjectsByUserIdService",
    GetProjectsByUserIdService
  );

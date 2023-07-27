import "reflect-metadata";
import { container } from "tsyringe";
import { type IUserRepository } from "./src/domain/Users/types/userRepository";
import { UserRepositoryMock } from "./src/domain/Users/repositories/repositoryMock";
import {
  CreateUsersService,
  GetProjectsByUserIdService,
  ListUsersService,
  EditUsersService,
} from "./src/domain/Users/services";

container
  .registerSingleton<IUserRepository>("IUserRepository", UserRepositoryMock)
  .register<ListUsersService>("ListUsersService", ListUsersService)
  .register<GetProjectsByUserIdService>(
    "GetProjectsByUserIdService",
    GetProjectsByUserIdService
  )
  .register<CreateUsersService>("CreateUsersService", CreateUsersService)
  .register<EditUsersService>("EditUsersService", EditUsersService);

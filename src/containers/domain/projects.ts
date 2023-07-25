import { container } from "tsyringe";

import {
  type IProjectRepository,
  type IProjectController,
} from "@/domain/Projects/types";
import { ProjectRepository } from "@/domain/Projects/repositories/repository";

import { ProjectController } from "@/domain/Projects/controllers";

import {
  CreateProjectService,
  GetUsersByProjectIdService,
  ListProjectsService,
} from "@/domain/Projects/services";

// Repositories
container.registerSingleton<IProjectRepository>(
  "IProjectRepository",
  ProjectRepository
);

// Controllers
container.register<IProjectController>("IProjectController", {
  useClass: ProjectController,
});

// Services
container
  .register<CreateProjectService>("CreateProjectService", CreateProjectService)
  .register<GetUsersByProjectIdService>(
    "GetUsersByProjectIdService",
    GetUsersByProjectIdService
  )
  .register<ListProjectsService>("ListProjectsService", ListProjectsService);

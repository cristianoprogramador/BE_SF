import { container } from "tsyringe";
import { PrismaClient } from "@prisma/client";

import { type IProjectRepository } from "@/domain/Projects/types";
import { ProjectRepository } from "@/domain/Projects/repository";

import { ProjectController } from "@/domain/Projects/controllers";

container.register<PrismaClient>("PrismaClient", {
  useValue: new PrismaClient(),
});

container.registerSingleton<IProjectRepository>(
  "ProjectRepository",
  ProjectRepository
);

container.register<ProjectController>("ProjectController", {
  useClass: ProjectController,
});

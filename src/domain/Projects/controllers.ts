import { type ICreateProjectDTO, type IProjectController } from "./types";
import {
  ListProjectsService,
  CreateProjectService,
  GetUsersByProjectIdService,
} from "./services";
import { type Project } from "@prisma/client";
import { container } from "tsyringe";

export class ProjectController implements IProjectController {
  public async projectsQuery() {
    const listProjectsService = container.resolve(ListProjectsService);
    return listProjectsService.execute();
  }
  public async createProjectMutation(_: undefined, args: ICreateProjectDTO) {
    const createProjectService = container.resolve(CreateProjectService);
    return createProjectService.execute(args);
  }
  public async projectUsers(parent: Project) {
    const getUsersByProjectIdService = container.resolve(
      GetUsersByProjectIdService
    );
    return getUsersByProjectIdService.execute(parent.id);
  }
}

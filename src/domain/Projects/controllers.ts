import { type ICreateProjectDTO, type IProjectController } from "./types";
import {
  ListProjectsService,
  CreateProjectService,
  GetUsersByProjectIdService,
} from "./services";
import { type Project } from "@prisma/client";

export class ProjectController implements IProjectController {
  public async projectsQuery() {
    const listProjectsService = new ListProjectsService();
    return listProjectsService.execute();
  }
  public async createProjectMutation(_: undefined, args: ICreateProjectDTO) {
    const createProjectService = new CreateProjectService();
    return createProjectService.execute(args);
  }
  public async projectUsers(parent: Project) {
    const getUsersByProjectIdService = new GetUsersByProjectIdService();
    return getUsersByProjectIdService.execute(parent.id);
  }
}

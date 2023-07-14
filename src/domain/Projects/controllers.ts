import { type ICreateProjectDTO, type IProjectController } from "./types";
import { ListProjectsService, CreateProjectService } from "./services";

export class ProjectController implements IProjectController {
  public async projects() {
    const listProjectsService = new ListProjectsService();
    return listProjectsService.execute();
  }
  public async createProject(_: undefined, args: ICreateProjectDTO) {
    const createProjectsService = new CreateProjectService();
    return createProjectsService.execute(args);
  }
}

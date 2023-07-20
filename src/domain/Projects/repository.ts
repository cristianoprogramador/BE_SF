import { type Project } from "@prisma/client";
import { prisma } from "../../prisma";
import { type ICreateProjectDTO, type IProjectRepository } from "./types";

export class ProjectRepository implements IProjectRepository {
  private prisma = prisma;

  constructor() {
    this.prisma = prisma;
  }

  public async getAllProjects() {
    return this.prisma.project.findMany();
  }

  public async createProject(data: ICreateProjectDTO) {
    return this.prisma.project.create({ data });
  }

  public async getUsersByProjectId(projectId: Project["id"]) {
    return this.prisma.project
      .findUnique({ where: { id: projectId } })
      .users()
      .then((result) => result ?? []);
  }
}

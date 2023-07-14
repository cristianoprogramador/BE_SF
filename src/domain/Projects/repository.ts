import { PrismaClient } from "@prisma/client";
import { type ICreateProjectDTO, type IProjectRepository } from "./types";

export class ProjectRepository implements IProjectRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAllProjects() {
    return this.prisma.project.findMany();
  }

  public async createProject(data: ICreateProjectDTO) {
    return this.prisma.project.create({ data });
  }

  public async getUsersByProjectId(projectId: number) {
    return this.prisma.project
      .findUnique({ where: { id: projectId } })
      .users()
      .then((result) => result ?? []);
  }
}

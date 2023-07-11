import { PrismaClient, type Project } from "@prisma/client";

const prisma = new PrismaClient();

export const projectService = {
  createProject: (args: Project): Promise<Project> => {
    return prisma.project.create({ data: args });
  },
};

describe("createProject", () => {
  test("should create a new project", async () => {
    const projectData: Project = {
      id: 2,
      name: "Create a Milkshake Project",
      description: "A very good project description",
      client: "Client Name",
      technologies: "Technology Name",
      startDate: new Date(),
      delivery: new Date(),
      createdAt: new Date(),
    };

    prisma.project.create = jest.fn().mockResolvedValue(projectData);

    const createdProject = await projectService.createProject(projectData);

    expect(createdProject).toMatchObject(projectData);
  });
});

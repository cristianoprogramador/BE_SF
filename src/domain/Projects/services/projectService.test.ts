import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const projectService = {
  createProject: (args: any): Promise<any> => {
    return prisma.project.create({ data: args });
  },
};

describe("createProject", () => {
  test("should create a new project", async () => {
    const projectData = {
      name: "Create a Milkshake Project",
      description: "A very good project description",
      client: "Client Name",
      technologies: "Technology Name",
      startDate: new Date(),
      delivery: new Date(),
    };

    const createdProject = await projectService.createProject(projectData);

    expect(createdProject).toMatchObject(projectData);
  });
});

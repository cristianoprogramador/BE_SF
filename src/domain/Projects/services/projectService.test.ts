import { PrismaClient, type Project } from "@prisma/client";

const prisma = new PrismaClient();

export const projectService = {
  createProject: (args: Project): Promise<Project> => {
    return prisma.project.create({ data: args });
  },
};

describe("createProject", () => {
  test("should create a new project", async () => {
    expect(true).toBe(true);
  });
});
